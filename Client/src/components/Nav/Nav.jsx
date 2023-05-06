import styles from "../Nav/nav.module.css"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"

export default function Nav() {
  const location = useLocation()

  if (location.pathname === "/") {
    return null
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <div className="title">
            <img
              src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
              alt="nose"
            />
          </div>
          <div className={styles.lista}>
            <ul>
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? styles.activeClass : { color: "#93a8b4" }
                  }
                >
                  HOME
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/characters"
                  className={({ isActive }) =>
                    isActive ? styles.activeClass : { color: "#93a8b4" }
                  }
                >
                  CHARACTERS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    isActive ? styles.activeClass : { color: "#93a8b4" }
                  }
                >
                  FAVORITES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? styles.activeClass : { color: "#93a8b4" }
                  }
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/detail"
                  className={({ isActive }) =>
                    isActive ? styles.activeClass : { color: "#93a8b4" }
                  }
                >
                  DETAIL
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
