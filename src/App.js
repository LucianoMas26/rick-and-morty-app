import Landing from "./components/Landing/Landing.jsx"
import Nav from "./components/Nav/Nav"
import { Route, Routes } from "react-router-dom"
import Characters from "./components/Characters/CharactersSection"
import Login from "./components/Login/Login"
import About from "./components/About/About"
import Detail from "./components/Detail/Detail.jsx"
import Error from "./components/Error404/Error"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Nav />}>
          <Route path="/home" element={<Landing />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
