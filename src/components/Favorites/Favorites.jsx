import { useSelector } from "react-redux"
import Card from "../Card/Card"
import styles from "../Cards/gridCards.module.css"
import stylesCharacter from "../Characters/Characters.module.css"

export default function Favorite() {
  const state = useSelector((state) => state.myFavoritesReducer.myFavorites)
  return (
    <div className={stylesCharacter.container}>
      <div className={stylesCharacter.flex}>
        <div>
          <h1 className={stylesCharacter.characters}>Favorites</h1>
        </div>
        <div></div>
      </div>

      <div className={styles.gridCards}>
        {state.map((element) => (
          <Card
            id={element.id}
            key={element.id}
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
          />
        ))}
      </div>
    </div>
  )
}
