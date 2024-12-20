import styles from "../about/About.module.css";
import JuanPhoto from "../assets/img/juan-portafolio.jpeg";

const About = () => {
  return (
    <section className={styles.about}>
      <article className={styles.intro}>
        <div className={styles.img}>
          <img src={JuanPhoto} alt="" />
        </div>
        <p>
          Hola, soy Juan Medina Mendoza, de la ciudad de Barranquilla, Colombia.
          Soy un apasionado de la tecnología, el deporte y la música. De estos
          dos últimos he adquirido valores como la disciplina, la práctica
          constante y la perseverancia, ya que considero que tanto el deporte
          como la música son excelentes maneras de desarrollar estas cualidades.
          desafíos técnicos.
        </p>
        <div className={styles.points}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </article>

      <div className={styles.edu}>
        <h2>Educación</h2>

        <div>
          <h3>Udemy</h3>
          <span>React, React-Native, Next.js, Tailwind</span>
        </div>

        <div>
          <h3>platzi</h3>
          <span>HTML, Css, javascript</span>
        </div>

        <div>
          <h3>Universidad del Atlantico</h3>
          <span>Lic. en cultura fisica, recreacion y deportes</span>
        </div>
      </div>
    </section>
  );
};

export default About;
