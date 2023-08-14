const path = require('path')
const app = require('fastify')({ logger: false })
const fastifySession = require('@fastify/session')
const fastifyCookie = require('@fastify/cookie')
app.register(fastifyCookie)
app.register(fastifySession, {
  cookieName: 'VUIADMINN',
  secret: 'yo12xYAkl123fDoJvya1zaoN1hBE8rIq',
  cookie: { secure: false },
  expires: 1800000,
})

app.register(require('fastify-file-upload'))
app.register(require('@fastify/websocket'))
app.register(require('@fastify/formbody'))
app.register(require('@fastify/cors'))

app.register(require('@fastify/static'), {
  root: path.join(__dirname, '/public'),
  prefix: '/public',
})

app.register(require('./apps/test_ws'))
const test_apis = require('./apps/test_apis')
test_apis(app)

const start = async () => {
  try {
    await app.listen({ port: 9988 })
    console.log('Start:9988')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
