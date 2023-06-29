import Contact from './Contact'

export default function ContactList({users}) {
  return (
    <>
      <h2 className="flex h-12 items-center justify-center border-b border-gray-100 text-xl font-semibold">
        Contacts
      </h2>
      <div className="flex-1 space-y-4 overflow-y-scroll p-4">
        {users.map((user) => (
          <Contact key={user.id} user={user} />
        ))}
      </div>
    </>
  )
}
