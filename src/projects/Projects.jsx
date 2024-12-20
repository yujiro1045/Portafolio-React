import styles from "../projects/Projects.module.css";
import img1 from "../assets/img/teslo-shop.png";
import img2 from "../assets/img/quchara.jpeg";
import img3 from "../assets/img/filmHub1.jpeg";
import img4 from "../assets/img/filmHub2.jpeg";
import img5 from "../assets/img/filmHub3.jpeg";
import img6 from "../assets/img/filmHub4.jpeg";
import HTMLIcon from "../assets/icons/HTMLIcon.svg";
import CSSIcon from "../assets/icons/CSSIcon.svg";
import NextJsIcon from "../assets/icons/NextJsIcon.svg";
import TailwindIcon from "../assets/icons/TailwindIcon.svg";
import ReactNative from "../assets/icons/ReactNative.svg";
import JavascriptIcon from "../assets/icons/JavascriptIcon.svg";
import GitHubIcon from "../assets/icons/GitHubIcon.svg";

const Projects = () => {
  const cards = [
    {
      image: [img1],
      name: "Teslo-shop",
      description:
        "Creada con Next.js es una pagina de una tienda de ropa de la marca tesla, la cual tiene ropa para hombres, mujeres y niños, cuanto con un carrito de compras y un navbar y sideBar totalmente funcionales",
      stacks: [HTMLIcon, NextJsIcon, TailwindIcon, JavascriptIcon],
      links: "https://github.com/yujiro1045/Teslo-shop",
    },
    {
      image: [img2],
      name: "Quchara",
      description:
        "Quchara es una app mobile creada con React-native, la cual esta dirigida a resolver la problematica del agendamiento de almuerzos ya sean diarios, semanales o mensuales de trabajadores de los centros empresariales de la ciudad de Barranquilla",
      stacks: [HTMLIcon, ReactNative, CSSIcon, JavascriptIcon],
    },
    {
      image: [img3, img4, img5, img6],
      name: "FilmHub",
      description:
        "FilmHub es una app mobile creada con React-native, es una app de peliculas en la cual visualizas las peliculas mas actuales y en taquilla del momento, incluye un buscador y una pantalla de favoritos",
      stacks: [HTMLIcon, ReactNative, CSSIcon, JavascriptIcon],
      links: "https://github.com/yujiro1045/FilmHub",
    },
  ];

  return (
    <section className={styles.projects}>
      <h2>Proyectos</h2>
      <div className={styles.cards}>
        {cards.map((card, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.img}>
                {card.image.map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imgSrc}
                    className={styles.projectImage}
                  />
                ))}
              </div>

              <h3>{card.name}</h3>

              <p>{card.description}</p>

              <div className={styles.stacks}>
                {card.stacks.map((stack, stackIndex) => (
                  <img key={stackIndex} src={stack} width="39" />
                ))}
              </div>

              <div className={styles.Icon}>
                <a href={card.links}>
                  <img src={GitHubIcon} width="35px" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
