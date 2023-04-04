import SearchBar from "../SearchBar/SearchBar"
import Cards from "../Cards/Cards"
import styles from "../Characters/Characters.module.css"
import Modal from "../Modal/Modal"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCharacter } from "../../redux/actions/actions"
import searchId from "../../helpers/searchId"

export default function Characters(props) {
  const [errorMessage, setErrorMessage] = useState("")
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const state = useSelector((state) => state.reducerCharacter.characters)

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
        </div>
        <SearchBar
          onSearch={(id) =>
            searchId(id, state, dispatch, showErrorModal, addCharacter)
          }
        />
      </div>
      <div className={styles.grid}>
        <Cards characters={state} />
      </div>
      {showModal && <Modal message={errorMessage} onClose={handleCloseModal} />}
    </div>
  )
}
