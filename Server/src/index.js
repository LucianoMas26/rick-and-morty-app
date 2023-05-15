const express = require("express")
const server = express()
require("dotenv").config()
const { PORT } = process.env
const router = require("./routes/index")
const { conn } = require("./DB_connection")
server.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://rick-and-morty-p5pj1495z-lucianomas26.vercel.app/"
  )
  res.header("Access-Control-Allow-Credentials", "true")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
  next()
})

server.use(express.json())

server.use("/rickandmorty", router)

conn
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server raised in port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })

// const http = require("http")
// const PORT = 3001
// const getCharById = require("./controllers/getCharById")

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     const { url } = req
//     if (url.startsWith("/rickandmorty/character/")) {
//       const urlParts = url.split("/")
//       const urlNumber = urlParts[urlParts.length - 1]
//       getCharById(res, urlNumber)
//     }
//   })
//   .listen(PORT, "localhost")
