
const upload = require('./upload')
module.exports = (app) => {
  app.post('/monitor/upload', upload)
}
