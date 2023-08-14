const login = require('./login')
const upload = require('./upload')
const { monitor, monitorList, monitorRecord } = require('./monitor')

module.exports = (app) => {
  app.post('/test/login', login)
  app.post('/test/upload', upload)
  app.post('/test/monitor', monitor)
  app.get('/test/monitor_list', monitorList)
  app.get('/test/monitor_record', monitorRecord)
}
