import {forwardRef} from 'react'
import {Form, useParams} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

const MessageForm = forwardRef(function MessageForm(props, ref) {
  const params = useParams()

  return (
    <Form
      //se agrega el parametro url para reutilizar el componente
      action={`/${params.url}/${params.id}/${params.name}/${params.url}`}
      className="mt-4 rounded-md bg-gray-100 p-2"
      method="post"
      ref={ref}
    >
      <input
        autoFocus
        className="block w-full bg-transparent px-4 py-2"
        name="message"
        placeholder="Message..."
        type="text"
      />
    </Form>
  )
})

export default MessageForm
