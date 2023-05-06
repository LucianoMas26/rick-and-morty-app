const { User } = require("../DB_connection")

const login = async (req, res) => {
  const { email, password } = req.query
  if (!email || !password) {
    res.status(400).json({ message: "Faltan datos" })
  }
  try {
    const user = User.findOne({
      where: { email }
    })
    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" })
    }
    if (user.password !== password) {
      res.status(403).json({ message: "Contraseña incorrecta" })
    } else {
      res.status(200).json({ access: true })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = login
