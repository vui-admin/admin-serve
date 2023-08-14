// const db = require('../../utils/db')
const monitor = async (req, reply) => {
  const { authInfo, data, breadcrumb } = req.body
  let res = null
  if (data && data.type === 'RECORD') {
    res = await db.table('vui_record').insert({
      errorId: data.errorId,
      events: JSON.stringify(data.events),
    })
  } else {
    res = await db.table('vui_monitor').insert({
      trackerId: authInfo.trackerId,
      sdkVersion: authInfo.sdkVersion,
      projectId: authInfo.projectId,
      errorId: data.errorId,
      data: JSON.stringify(data),
      breadcrumb: JSON.stringify(breadcrumb),
    })
  }

  return {
    code: 200,
    message: 'SUCCESS',
    data: {
      a: req.body,
      b: data.type,
    },
  }
}

const monitorList = async (req, reply) => {
  const res = await db.table('vui_monitor').get()
  return {
    code: 200,
    data: res,
  }
}

const monitorRecord = async (req, reply) => {
  const { errorId } = req.query
  const res = await db.table('vui_record').where('errorId', errorId).first()
  return {
    code: 200,
    data: res,
  }
}
module.exports = { monitor, monitorList, monitorRecord }
