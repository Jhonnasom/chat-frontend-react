import {forwardRef} from 'react'
import {useParams} from 'react-router-dom'
import Message from './Message'

const MessageList = forwardRef(function MessageList({messages}, ref) {
  const params = useParams()
  return (
    <>
      <h3 className="text-center font-bold">{params.name}</h3>
      <div
        className="flex flex-1 flex-col space-y-4 overflow-y-scroll"
        ref={ref}
      >
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    </>
  )
})

export default MessageList
