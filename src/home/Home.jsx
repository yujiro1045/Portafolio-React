import Animation from "../Animation/Animation";
import styles from "../home/Home.module.css";

const Home = () => {
  return (
    <section className={styles.Home}>
      <article className={styles.dev}>
        <h1>Font-end Web & Mobile Developer</h1>
        <p>
          Soy Juan Medina, desarrollador frontend con más de 2 años de
          experiencia creando soluciones web y móviles. Domino tecnologías como
          React, Next.js, y React Native, y tengo un enfoque centrado en la
          optimización de la experiencia del usuario. He trabajado en proyectos
          que van desde aplicaciones móviles innovadoras como Quchara hasta
          sitios web interactivos para negocios, como páginas de peluquería con
          funcionalidades de agendamiento. Mi capacidad para aprender
          rápidamente nuevas herramientas, como Ionic, y mi experiencia
          intermedia en Expo me permiten adaptarme a distintos entornos y
          desafíos técnicos.
        </p>
        <div className={styles.points}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </article>

      <div className={styles.buttons}>
        <h2>Juan Medina Mendoza</h2>
        <div>
          <a href="#">GMAIL</a>
          <a href="#">CV</a>
        </div>
      </div>

      <Animation />
    </section>
  );
};

export default Home;
