import styles from "../Landing/landing.module.css"
import Container from "../Container/Container"
import LandingText from "../LandingText/LandingText"
export default function Landing() {
  return (
    <div>
      <div className={styles.landing}>
        <Container>
          <div>
            <div className={styles.center}>
              <LandingText></LandingText>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
