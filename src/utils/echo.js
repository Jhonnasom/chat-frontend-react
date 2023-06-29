import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher

export default new Echo({
  broadcaster: 'pusher',
  key: 'a71974246f0039588d89',
  cluster: 'us2',
  forceTLS: true,
})
