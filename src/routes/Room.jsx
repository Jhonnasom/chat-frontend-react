import {useContext, useEffect, useRef} from 'react'
import {useLoaderData, useRevalidator} from 'react-router-dom'
import {AuthContext} from '../context/auth.context'

import MessageForm from '../components/MessageForm'
import MessageList from '../components/MessageList'
import echo from '../utils/echo'
import ky from '../utils/ky'

export async function action({params, request}) {
  const formData = await request.formData()

  await ky
    .post('messages', {
      json: {
        message: formData.get('message'),
        room_id: params.id,
      },
    })
    .json()

  return {}
}

export async function loader({params}) {
  const messages = await ky.get(`messages/${params.id}`).json()

  return {
    messages,
  }
}

export default function Room() {
  const formRef = useRef(null)
  const listRef = useRef(null)
  const {messages} = useLoaderData()
  const revalidator = useRevalidator()
  const userContext = useContext(AuthContext)

  useEffect(() => {
    const listener = echo
      .channel(`messages.user.${userContext.id}`)
      .listen('MessageCreated', function (data) {
        console.log('MessageCreated')
        console.log(data)
        revalidator.revalidate()
      })

    formRef.current.reset()
    listRef.current.scrollTo(0, listRef.current.scrollHeight)

    return () => listener.stopListening('MessageCreated')
  }, [revalidator])

  return (
    <div className="flex flex-1 flex-col overflow-hidden p-4">
      <MessageList messages={messages} ref={listRef} />
      <MessageForm ref={formRef} />
    </div>
  )
}
