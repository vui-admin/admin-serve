const login = async (req, reply) => {
  const { username } = req.body
  const staticMenu = []

  const menu = []

  return {
    code: 200,
    message: 'SUCCESS',
    data: {
      token: '202cb962ac59075b964b07152d234b70',
      username,
      menu,
    },
  }
}
module.exports = login
