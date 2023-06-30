import Channel from './Channel'

export default function ChannelList({channels}) {
  return (
    <>
      <h2 className="flex h-12 items-center justify-center border-b border-gray-100 text-xl font-semibold">
        Channels
      </h2>
      <div className="flex-1 space-y-4 overflow-y-scroll p-4">
        {channels.map((channel) => (
          <Channel key={channel.id} channel={channel} />
        ))}
      </div>
    </>
  )
}
