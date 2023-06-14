import styles from "../Login/Login.module.css"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/home")
  }

  return (
    <div className={styles.LoginContainer}>
      <div className={styles.App}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h2 className={styles.aboutTitle}>
            Rick and Morty <span>App </span>
          </h2>
          <p>
            Bienvenido! Haz clic en el botón para iniciar sesión y ver más
            contenido
          </p>
          <div className={styles.form}>
            <button className={styles.buttonForm} onClick={handleLogin}>
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
