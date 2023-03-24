import { createStore } from "redux"
import reducerCharacter from "../reducer/reducer"

const store = createStore(
  reducerCharacter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store
