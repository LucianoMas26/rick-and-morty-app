const data = require("./utils/data.js")
const http = require("http")
const PORT = 3001

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    const { url } = req
    if (url.startsWith("/rickandmorty/character/")) {
      const urlParts = url.split("/")
      const urlNumber = urlParts[urlParts.length - 1]
      const filterCharacter = data.filter((e) => e.id === Number(urlNumber))
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(filterCharacter[0]))
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" })
      res.end("404 Not Found")
    }
  })
  .listen(PORT, "localhost")
