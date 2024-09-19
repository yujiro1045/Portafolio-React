import styles from "../projects/Projects.module.css";
import img1 from "../assets/img/teslo-shop.png";
import img2 from "../assets/img/quchara.jpeg";
import img3 from "../assets/img/filmHub1.jpeg";
import img4 from "../assets/img/filmHub2.jpeg";
import img5 from "../assets/img/filmHub3.jpeg";
import img6 from "../assets/img/filmHub4.jpeg";
import Github from "../assets/icons/Github.svg";
import Javacript from "../assets/icons/javascript.svg";
import Html from "../assets/icons/html.svg";
import Next from "../assets/icons/Nextjs.svg";
import Tailwind from "../assets/icons/Tailwind.svg";

const Projects = () => {
  const cards = [
    {
      image: [img1],
      name: "Teslo-shop",
      description:
        "Creada con Next.js es una pagina de una tienda de ropa de la marca tesla, la cual tiene ropa para hombres, mujeres y niños, cuanto con un carrito de compras y un navbar y sideBar totalmente funcionales",
      stacks: [Html, Next, Tailwind, Javacript],
      links: "",
    },
  ];

  return <section className={styles.projects}></section>;
};

export default Projects;
