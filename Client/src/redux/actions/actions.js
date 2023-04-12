import {
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  ADD_FAVORITES,
  DELETE_FAVORITES,
  GENDER_FILTER,
  ORDER_FILTER
} from "./actionTypes"

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

export const addFavorites = (character) => {
  return {
    type: ADD_FAVORITES,
    payload: character
  }
}

export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITES,
    payload: id
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
