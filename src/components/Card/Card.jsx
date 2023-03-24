import styles from "../Card/card.module.css"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeCharacter } from "../../redux/actions/actions"
export default function Card(props) {
  const dispatch = useDispatch()
  return (
    <div className={styles.card}>
      <img src={props.image} alt="" />
      <div className={`${styles.btn} btn`}>
        <button onClick={() => dispatch(removeCharacter(props.name))}>x</button>
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
