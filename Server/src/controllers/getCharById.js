const axios = require("axios")

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { id, name, gender, species, origin, image, status, location } =
        response.data
      res.writeHead(200, { "Content-type": "application/json" })
      res.end(
        JSON.stringify({
          id,
          name,
          gender,
          species,
          origin,
          image,
          status,
          location
        })
      )
    })
    .catch((error) => {
      res.writeHead(500, { "Content-type": "text/plain" })
      res.end(error.message)
    })
}

module.exports = getCharById
