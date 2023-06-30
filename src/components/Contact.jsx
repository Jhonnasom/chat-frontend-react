import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Contact({user}) {
  return (
    <div>
      <Link to={`/rooms/${user.id}/${user.name}/rooms`}>{user.name}</Link>
      {user.unreadMessages > 0 && (
        <Link to={`/rooms/${user.id}/${user.name}/rooms`}>
          <span className="text-red">{` (${user.unreadMessages})`}</span>
        </Link>
      )}
    </div>
  )
}
