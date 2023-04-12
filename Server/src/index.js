const http = require("http")
const PORT = 3001
const getCharById = require("./controllers/getCharById")

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    const { url } = req
    if (url.startsWith("/rickandmorty/character/")) {
      const urlParts = url.split("/")
      const urlNumber = urlParts[urlParts.length - 1]
      getCharById(res, urlNumber)
    }
  })
  .listen(PORT, "localhost")
