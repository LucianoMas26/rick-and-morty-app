import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions/actionTypes"

const initialState = {
  characters: []
}

const reducerCharacter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.payload]
      }
    case REMOVE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (element) => element.name !== action.payload
        )
      }

    default:
      return state
  }
}
export default reducerCharacter
