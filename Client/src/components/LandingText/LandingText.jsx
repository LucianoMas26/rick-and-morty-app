import styles from "../LandingText/title.module.css"
import { useNavigate } from "react-router-dom"
import "animate.css"
export default function LandingText() {
  const navigate = useNavigate()
  return (
    <div className={styles.title}>
      <div className="animate__animated animate__fadeIn">
        <h1>Rick and Morty</h1>
        <div className={styles.line}>
          <hr />
        </div>
        <div>
          Rick and Morty is an American adult animated science-fiction sitcom
          created by Justin Roiland and Dan Harmon for Cartoon Network's
          nighttime programming block Adult Swim. It is distributed
          internationally by Warner Bros.
        </div>
        <button className={styles.btn} onClick={() => navigate("/about")}>
          KNOW MORE
        </button>
      </div>
    </div>
  )
}
