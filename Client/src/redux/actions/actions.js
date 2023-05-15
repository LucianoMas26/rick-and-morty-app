import {
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  ADD_FAVORITES,
  DELETE_FAVORITES,
  GENDER_FILTER,
  ORDER_FILTER
} from "./actionTypes"
import axios from "axios"
export const addCharacter = (character) => {
  return {
    type: ADD_CHARACTER,
    payload: character
  }
}

export const removeCharacter = (name) => {
  return {
    type: REMOVE_CHARACTER,
    payload: name
  }
}

// export const addFavorites = (character) => {
//   return {
//     type: ADD_FAVORITES,
//     payload: character
//   }
// }

export const addFavorites = (character) => {
  const endpoint =
    "https://rick-and-morty-app-production-98fa.up.railway.app/rickandmorty/fav"
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAVORITES,
        payload: data
      })
    })
  }
}

// export const deleteFavorite = (id) => {
//   return {
//     type: DELETE_FAVORITES,
//     payload: id
//   }
// }

export const deleteFavorite = (id) => {
  const endpoint = `https://rick-and-morty-app-production-98fa.up.railway.app/rickandmorty/fav/${id}`
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: DELETE_FAVORITES,
        payload: data
      })
    })
  }
}
export const filterByGender = (gender) => {
  return {
    type: GENDER_FILTER,
    payload: gender
  }
}
export const filterByOrder = (order) => {
  return {
    type: ORDER_FILTER,
    payload: order
  }
}
