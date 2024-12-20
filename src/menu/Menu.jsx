import { useState } from "react";
import { Link } from "react-router-dom";
import Networks from "./Networks";
import styles from "../menu/Menu.module.css";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <span className={styles.logo}>LOGO</span>

      {/* Menú estándar */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.nav_open : ""}`}>
        <Link to="/">Inicio</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/experience">Experiencia</Link>
        <Link to="/about">Sobre mí</Link>
      </nav>

      {/* Menú hamburguesa */}
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={styles.hamburger_line}></span>
        <span className={styles.hamburger_line}></span>
        <span className={styles.hamburger_line}></span>
      </button>

      <Networks />
    </header>
  );
};

export default Menu;
