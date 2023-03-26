import { ADD_FAVORITES, DELETE_FAVORITES } from "../actions/actionTypes"

const initialState = {
  myFavorites: []
}

const myFavoritesReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, actions.payload]
      }
    case DELETE_FAVORITES:
      const filteredList = state.myFavorites.filter(
        (e) => e.id !== actions.payload
      )
      return {
        ...state,
        myFavorites: filteredList
      }
    default:
      return { ...state }
  }
}
export default myFavoritesReducer
