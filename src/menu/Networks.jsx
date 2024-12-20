import LinkedIcon from "../assets/icons/LinkedIcon.svg";
import GitHubIcon from "../assets/icons/GitHubIcon.svg";
import styles from "../menu/Networks.module.css";

const Networks = () => {
  return (
    <div className={styles.Networks}>
      <a href="#">
        <img width="35px" src={LinkedIcon} />
      </a>
      <a href="#">
        <img width="35px" src={GitHubIcon} />
      </a>
    </div>
  );
};

export default Networks;
