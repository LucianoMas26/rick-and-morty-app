import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  GENDER_FILTER,
  ORDER_FILTER
} from "../actions/actionTypes"

const initialState = {
  myFavorites: [],
  allCharacters: []
}

const myFavoritesReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        allCharacters: [...state.allCharacters, actions.payload],
        myFavorites: [...state.allCharacters, actions.payload]
      }
    case DELETE_FAVORITES:
      const filteredList = state.myFavorites.filter(
        (e) => e.id !== actions.payload
      )
      return {
        ...state,
        myFavorites: filteredList
      }
    case GENDER_FILTER:
      const filterByGender = [...state.allCharacters].filter(
        (character) =>
          character.gender.toLowerCase() === actions.payload.toLowerCase()
      )
      return {
        ...state,
        myFavorites: filterByGender
      }
    case ORDER_FILTER:
      const filterByOrder = [...state.allCharacters].sort((a, b) => {
        if (actions.payload === "Ascendente") {
          return a.id > b.id ? 1 : -1
        } else {
          return a.id < b.id ? 1 : -1
        }
      })
      return {
        ...state,
        myFavorites: filterByOrder
      }
    default:
      return { ...state }
  }
}
export default myFavoritesReducer
