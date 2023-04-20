let myFavorites = []

const postFav = (req, res) => {
  // const { character } = req.body
  // myFavorites.push(character)
  myFavorites.push(req.body)
  res.json(myFavorites)
}

const deleteFav = (req, res) => {
  const { id } = req.params
  myFavorites = myFavorites.filter((e) => e.id !== parseInt(id))
  res.json(myFavorites)
}

module.exports = { postFav, deleteFav }
