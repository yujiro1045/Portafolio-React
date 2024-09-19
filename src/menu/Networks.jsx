import Linkedin from "../assets/icons/Linkedin.svg";
import Github from "../assets/icons/Github.svg";
import styles from "../menu/Networks.module.css";

const Networks = () => {
  return (
    <div className={styles.Networks}>
      <a href="#">
        <img width="35px" src={Linkedin} />
      </a>
      <a href="#">
        <img width="35px" src={Github} />
      </a>
    </div>
  );
};

export default Networks;
