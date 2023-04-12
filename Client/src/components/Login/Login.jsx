import styles from "../Login/Login.module.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const username = "luciano@test.com"
  const password = "37450853a"
  const navigate = useNavigate()
  const [form, setForm] = useState({})
  const [error, setError] = useState(false)
  const [access, setAccess] = useState(false)
  const [formComplete, setFormComplete] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.email === username && form.password === password) {
      setAccess(true)
      navigate("/home")
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    !access && navigate("/")
  }, [access, navigate])

  useEffect(() => {
    setFormComplete(form.email && form.password)
  }, [form])

  return (
    <div className={styles.LoginContainer}>
      <div className={styles.App}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h2 className={styles.aboutTitle}>
            Rick and Morty <span>App </span>
          </h2>
          <p>Bienvenido! Loguea en tu cuenta para ver mas del contenido</p>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={form.nombre}
                placeholder="Email"
                className={styles.inputForm}
                onChange={handleChange}
                id="email-input"
                required
              />
              <span className={styles.error}>
                {error ? "Email incorrecto" : ""}{" "}
              </span>
              <input
                type="password"
                name="password"
                value={form.password}
                placeholder="Password"
                className={styles.inputForm}
                onChange={handleChange}
                required
              />
              <span className={styles.error}>
                {error ? "Password incorrecto" : ""}{" "}
              </span>
              <button className={styles.buttonForm} disabled={!formComplete}>
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
