import { useSelector } from "react-redux"
import Card from "../Card/Card"
import styles from "../Cards/gridCards.module.css"
export default function Cards(props) {
  const { characters } = props
  const personajes = useSelector((state) => state.characters)
  console.log(personajes)
  return (
    <div className={styles.gridCards}>
      {characters.map((element, index) => (
        <Card
          id={element.id}
          key={index}
          name={element.name}
          species={element.species}
          gender={element.gender}
          image={element.image}
        ></Card>
      ))}
      |
    </div>
  )
}
