const upload = async (req, reply) => {
  const files = req.raw.files
  console.log(files)
  return {
    code: 200,
    message: 'SUCCESS',
    data: {
      file: '202cb962ac59075b964b07152d234b70',
      files
    },
  }
}
module.exports = upload
