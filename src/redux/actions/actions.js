import { ADD_CHARACTER, REMOVE_CHARACTER } from "./actionTypes"

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
