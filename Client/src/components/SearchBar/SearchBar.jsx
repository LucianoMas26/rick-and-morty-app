import { useState } from "react"
import styles from "../SearchBar/SearchBar.module.css"

export default function SearchBar(props) {
  const [id, setId] = useState("")
  const handleInput = (event) => {
    event.preventDefault()
    setId(event.target.value)
  }

  return (
    <div>
      <input
        type="search"
        onChange={handleInput}
        className={styles["search-input"]}
      />
      <button
        onClick={() => props.onSearch(id)}
        className={styles["search-button"]}
      >
        Agregar
      </button>
    </div>
  )
}
