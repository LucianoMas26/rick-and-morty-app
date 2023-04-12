import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import styles from "../Detail/Detail.module.css"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

export default function Detail() {
  const { detailId } = useParams()
  const [character, setCharacter] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
      .then((response) => response.json())
      .then((data) => {
        data.name ? setCharacter(data) : alert("No hay personaje con ese id")
      })
      .catch((err) => {
        console.log(err)
        window.alert("No hay personajes con ese ID")
      })
  }, [detailId])
  console.log(character)
  return (
    <div className={styles.detailBody}>
      <div className={styles.article}>
        <section className={styles.card}>
          <div className={styles.textContent}>
            <h3>The character choosen is {character.name}</h3>
            <p>Currently {character.status}.</p>
            <p>
              He is a {character.gender} {character.species} born on
              {character.origin?.name} in the location of
              {character.location?.name}.
            </p>
            <button
              className={styles.buttonDetail}
              onClick={() => navigate(-1)}
            >
              <ArrowBackIcon />
              Go Back
            </button>
          </div>
          <div className={styles.visual}>
            <img src={character.image} alt="" />
          </div>
        </section>
      </div>
    </div>
  )
}
