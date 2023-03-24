import styles from "../Error404/Error.module.css"
import { useNavigate } from "react-router-dom"
export default function Error() {
  const navigate = useNavigate()
  return (
    <div className={styles["background-img"]}>
      <div className={styles.space}></div>
      <div className={styles.wrapper}>
        <div class="img-wrapper">
          <span>44</span>
        </div>
        <p>
          The page you are trying to search has been moved to another universe.
        </p>
        <button type="button" onClick={() => navigate("/home")}>
          GET ME HOME
        </button>
      </div>
    </div>
  )
}
