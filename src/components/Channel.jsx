import {Link} from 'react-router-dom'

export default function Channel({channel}) {
  return (
    <div>
      <Link to={`/channels/${channel.id}/${channel.name}/channels`}>
        {channel.name}
      </Link>
      {channel.unreadMessages > 0 && (
        <Link to={`/channels/${channel.id}/${channel.name}/channels`}>
          <span className="text-red">{` (${channel.unreadMessages})`}</span>
        </Link>
      )}
    </div>
  )
}
