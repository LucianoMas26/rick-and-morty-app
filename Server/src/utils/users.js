require("dotenv").config()
const { PASSWORD } = process.env

const users = [{ email: "luciano@test.com", password: PASSWORD }]

module.exports = users
