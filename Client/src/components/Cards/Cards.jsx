import Card from "../Card/Card"
import styles from "../Cards/gridCards.module.css"
export default function Cards(props) {
  const { characters } = props

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
