const { postFav, deleteFav } = require("./handleFavorites")
const getCharById = require("./getCharById")
const login = require("./login")

module.exports = { login, postFav, deleteFav, getCharById }
