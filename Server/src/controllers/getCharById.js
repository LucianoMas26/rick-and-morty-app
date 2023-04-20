const axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
  const { id } = req.params
  axios(`${URL}${id}`)
    .then((response) => {
      const { id, name, gender, species, origin, image, status, location } =
        response.data
      if (response.data.error) {
        res.status(404).send("Not fount")
      } else {
        res.status(200).json({
          id,
          name,
          gender,
          species,
          origin,
          image,
          status,
          location
        })
      }
    })
    .catch((error) => {
      res.status(500).send(error.message)
    })
}

// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       const { id, name, gender, species, origin, image, status, location } =
//         response.data
//       res.writeHead(200, { "Content-type": "application/json" })
//       res.end(
//         JSON.stringify({
//           id,
//           name,
//           gender,
//           species,
//           origin,
//           image,
//           status,
//           location
//         })
//       )
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-type": "text/plain" })
//       res.end(error.message)
//     })
// }

module.exports = getCharById
