import styles from "./Header.module.css";
import { NavLink } from "react-router";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img className={styles.logoImg} src="/logo.png" alt="logo" />
        </NavLink>
      </div>

      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <img
            className={styles.burgerIcon}
            src="/close.svg"
            alt="закрыть меню"
          />
        ) : (
          <img
            src="/burger.svg"
            alt="открыть меню"
            className={styles.burgerIcon}
          />
        )}
      </button>

      {/* навигация */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
          }
          onClick={() => setMenuOpen(false)}
        >
          главная
        </NavLink>

          
        <NavLink
          to="/rent"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
          }
          onClick={() => setMenuOpen(false)}
        >
          Аренда недвижимости
        </NavLink>

        <NavLink
          to="/sale"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
          }
          onClick={() => setMenuOpen(false)}
        >
          Продажа недвижимости
        </NavLink>

        <NavLink
          to="/hotrent"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
          }
          onClick={() => setMenuOpen(false)}
        >
          горячие предложения
        </NavLink>

        <NavLink
          to="/transport"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
          }
          onClick={() => setMenuOpen(false)}
        >
          аренда транспорта
        </NavLink>

        <NavLink
          to="/exchange"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
          }
          onClick={() => setMenuOpen(false)}
        >
          обмен валют
        </NavLink>

        <NavLink
          to="/documents"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
          }
          onClick={() => setMenuOpen(false)}
        >
          ВУ, карты и тд.
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
          }
          onClick={() => setMenuOpen(false)}
        >
          экскурсии и мероприятия
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
