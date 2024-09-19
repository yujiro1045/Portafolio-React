import styles from "../menu/Menu.module.css";
import { Link } from "react-router-dom";
import Networks from "./Networks";

const Menu = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>LOGO</span>

      <nav className={styles.nav}>
        <Link to="/">
          <span>I</span>nicio
        </Link>
        <Link to="/projects">
          <span>P</span>royectos
        </Link>
        <Link to="/experience">
          <span>E</span>xperiencia
        </Link>
        <Link to="/about">
          <span>S</span>obre mí
        </Link>
      </nav>

      <nav className={styles.nav_mobile}>
        <Link>
          <img src="" alt="" />
        </Link>
        <Link>
          <img src="" alt="" />
        </Link>
      </nav>

      <Networks />
    </header>
  );
};

export default Menu;
