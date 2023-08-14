const test = require('./test')
const monitor = require('./monitor')

module.exports = (app)=>{
  test(app)
  monitor(app)
}
