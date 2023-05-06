const { Favorite } = require("../DB_connection")

const postFav = async (req, res) => {
  const { name, gender, species, origin, image, status } = req.body

  if (!name || !gender || !species || !origin || !image || !status) {
    return res.status(401).json({ message: "Faltan datos" })
  }
  try {
    await Favorite.create({
      where: {
        name,
        gender,
        species,
        origin,
        image,
        status
      }
    })
    const favorites = await Favorite.findAll()
    res.status(200).json(favorites)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = postFav
