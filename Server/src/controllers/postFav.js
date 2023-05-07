const { Favorite } = require("../DB_connection")

const postFav = async (req, res) => {
  const { id, name, gender, species, image } = req.body
  console.log(req.body)
  if (!name || !gender || !species || !image) {
    return res.status(401).json({ message: "Faltan datos" })
  }
  try {
    await Favorite.create({
      id,
      name,
      gender,
      species,
      image
    })
    const favorites = await Favorite.findAll()
    res.status(200).json(favorites)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = postFav
