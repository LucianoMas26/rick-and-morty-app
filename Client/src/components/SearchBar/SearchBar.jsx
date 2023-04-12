import { useState } from "react"
import styles from "../SearchBar/SearchBar.module.css"

export default function SearchBar(props) {
  const [id, setId] = useState("")
  const handleInput = (event) => {
    event.preventDefault()
    setId(event.target.value)
  }

  return (
    <div className="flex gap-3 items-center">
      <input
        type="search"
        onChange={handleInput}
        className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md h-[1.2rem] sm:text-sm"
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
