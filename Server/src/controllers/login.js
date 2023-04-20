const users = require("../utils/users")

const login = (req, res) => {
  const { password, email } = req.query

  const userMatched = users.find(
    (e) => e.password === password && e.email === email
  )

  if (userMatched) {
    res.status(200).json({ access: true })
  } else {
    res.status(200).json({ access: false })
  }
}
module.exports = login
