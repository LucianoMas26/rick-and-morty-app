const {
  login,
  postFav,
  deleteFav,
  postUser,
  getCharById
} = require("../controllers/index")
const express = require("express")
const router = express.Router()

router.get("/character/:id", getCharById)
router.get("/login", login)
router.post("/login", postUser)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router
