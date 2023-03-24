import styles from "../Container/container.module.css"
import LandingText from "../LandingText/LandingText"
export default function Container() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.center}>
          <LandingText></LandingText>
        </div>
      </div>
    </div>
  )
}
