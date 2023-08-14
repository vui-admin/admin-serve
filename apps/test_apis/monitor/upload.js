const upload = async (req, reply) => {
  const files = req.raw.files
  // projectId: req.raw.projectId,
  // files,
  // header:req.headers

  return {
    code: 200,
    message: 'SUCCESS',
  }
}
module.exports = upload
