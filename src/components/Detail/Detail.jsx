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
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((data) => {
        data.name ? setCharacter(data) : alert("No hay personaje con ese id")
      })
      .catch((err) => {
        console.log(err)
        window.alert("No hay personajes con ese ID")
      })
  }, [detailId])

  return (
    <div>
      <div className={styles.blogCard}>
        <div className={styles.photo}>
          <img src={character.image} alt="" />
        </div>
        <div className={styles.description}>
          <h1>{character.name}</h1>
          <div className={styles.flexDescription}>
            <div>
              <h2>{character.species}</h2>
              <p className={styles.summary}>{character.status}</p>
            </div>
            <div>
              <h2 className={styles.summary}>{character.gender}</h2>
              <p className={styles.summary}>{character.origin?.name}</p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.detailButton} onClick={() => navigate(-1)}>
        <ArrowBackIcon className={styles.arrowIcon} />
        Back
      </button>
    </div>
  )
}
