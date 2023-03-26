import styles from "../Card/card.module.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { removeCharacter } from "../../redux/actions/actions"
import DeleteIcon from "@mui/icons-material/Delete"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { addFavorites } from "../../redux/actions/actions"
import { deleteFavorite } from "../../redux/actions/actions"
import { useEffect, useState } from "react"
export default function Card(props) {
  const state = useSelector((state) => state.myFavoritesReducer.myFavorites)

  const dispatch = useDispatch()
  const [isFav, setIsFav] = useState(false)
  function handleFavorite() {
    if (isFav) {
      setIsFav(false)
      dispatch(deleteFavorite(props.id))
    } else {
      setIsFav(true)
      dispatch(addFavorites(props))
    }
  }

  useEffect(() => {
    state.forEach((favorite) => {
      if (favorite.id === props.id) {
        setIsFav(true)
      }
    })
  }, [state])

  return (
    <div className={styles.card}>
      <img src={props.image} alt="" />
      <div className={`${styles.btn} btn`}>
        <div className={styles.buttonFlex}>
          {isFav ? null : (
            <button onClick={() => dispatch(removeCharacter(props.name))}>
              <DeleteIcon className={styles.trashIcon} />
            </button>
          )}
          {isFav ? (
            <button onClick={handleFavorite}>
              <FavoriteIcon className={styles.heartIconActive} />
            </button>
          ) : (
            <button onClick={handleFavorite}>
              <FavoriteIcon className={styles.heartIcon} />
            </button>
          )}
        </div>
      </div>
      <div className={styles.info}>
        <Link to={`/detail/${props.id}`} key={props.id}>
          <h2>{props.name}</h2>
        </Link>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  )
}
