const dayjs = require('dayjs')

const users = new Map()

module.exports = async (app) => {
  app.get('/ws', { websocket: true }, (connection, req) => {
    const wss = app.websocketServer

    connection.socket.on('message', (message) => {
      const msg = JSON.parse(message.toString())

      if (msg.type === 'login') {
        users.set(req.id, msg.username)
      }
    })

    connection.socket.on('close', () => {})
  })
}
