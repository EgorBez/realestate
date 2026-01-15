import styles from "./Header.module.css";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img className={styles.logoImg} src="logo.webp" alt="logo" />
        </NavLink>
      </div>

      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <img
            className={styles.burgerIcon}
            src="close.webp"
            alt="закрыть меню"
          />
        ) : (
          <img
            src="burger.webp"
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

        <div className={styles.dropdown}>
          <span className={styles.navItem}>Недвижимость</span>
          <div className={styles.dropdownContent}>
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
              Продажа новостроек
            </NavLink>

            <NavLink
              to="/secondary"
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
              }
              onClick={() => setMenuOpen(false)}
            >
              Продажа вторичной недвижимости
            </NavLink>

            <NavLink
              to="/installment"
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
              }
              onClick={() => setMenuOpen(false)}
            >
              Продажа в рассрочку
            </NavLink>
          </div>
        </div>

        <NavLink
          to="/hotrent"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
          }
          onClick={() => setMenuOpen(false)}
        >
          горячие предложения
        </NavLink>

        <div className={styles.dropdown}>
          <span className={styles.navItem}>Аренда транспорта</span>
          <div className={styles.dropdownContent}>
            <NavLink
              to="/carsrent"
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
              }
              onClick={() => setMenuOpen(false)}
            >
              Автомобили
            </NavLink>

            <NavLink
              to="/bikesrent"
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
              }
              onClick={() => setMenuOpen(false)}
            >
              Скутеры
            </NavLink>
          </div>
        </div>

        <div className={styles.dropdown}>
          <span className={styles.navItem}>Остальные услуги</span>
          <div className={styles.dropdownContent}>
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

            <NavLink
              to="/fasttrack"
              className={({ isActive }) =>
                isActive ? `${styles.active} ${styles.navItem}` : styles.navItem
              }
              onClick={() => setMenuOpen(false)}
            >
              Гарантированный проход через границу или фаст трек
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
