import SearchBar from "../SearchBar/SearchBar"
import Cards from "../Cards/Cards"
import styles from "../Characters/Characters.module.css"
import Modal from "../Modal/Modal"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCharacter } from "../../redux/actions/actions"

export default function Characters(props) {
  const [errorMessage, setErrorMessage] = useState("")
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const state = useSelector((state) => state.characters)

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const isCharacterExist = state.some(
          (character) => character.id === data.id
        )
        if (!isCharacterExist) {
          data.name
            ? dispatch(addCharacter(data))
            : showErrorModal("No se encontró el personaje")
        } else {
          showErrorModal(`El personaje "${data.name}" ya existe`)
        }
      })
      .catch(() => {
        showErrorModal("Ocurrió un error al buscar el personaje")
      })
  }

  function showErrorModal(message) {
    setErrorMessage(message)
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div>
          <h1 className={styles.characters}>Characters Selection</h1>
          <div>
            <hr />
          </div>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={styles.grid}>
        <Cards characters={state} />
      </div>
      {showModal && <Modal message={errorMessage} onClose={handleCloseModal} />}
    </div>
  )
}
// export const mapDispatchToProps = (dispatch) => {
//   return {
//     addCharacter: function (character) {
//       console.log(character)
//       dispatch(addCharacter(character))
//     },
//     removeCharacter: function (name) {
//       dispatch(removeCharacter(name))
//     }
//   }
// }
// export const mapStateToProps = (state) => ({
//   characters: state.characters
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Characters)
