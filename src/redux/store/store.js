import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import reducerCharacter from "../reducer/reducer"
import myFavoritesReducer from "../reducer/favorite"
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers({ reducerCharacter, myFavoritesReducer }),
  composeEnhancer(applyMiddleware(thunk))
)
export default store
