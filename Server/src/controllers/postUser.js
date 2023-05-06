const { User } = require("../DB_connection")

const postUser = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).json({ message: "Faltan datos" })
  }
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password }
    })
    if (!created) {
      res.status(409).json({ message: "El usuario ya existe" })
    } else {
      res.status(200).json(user)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = postUser
