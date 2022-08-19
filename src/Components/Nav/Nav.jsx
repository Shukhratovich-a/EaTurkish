import { Link } from "react-router-dom";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useNav from "../../Hooks/useNav";

import Button from "../Lib/Button/Button";

import styles from "./Nav.module.scss";

const Nav = () => {
  const [isOpen, setIsOpen] = useNav();

  const { width } = useWindowDimensions();

  const handleClose = (evt) => {
    if (evt.target.className.includes(styles.nav__link)) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`${styles.nav} ${isOpen ? styles["nav--open"] : ""}`} onClick={handleClose}>
      <ul className={`${styles.nav__list}`}>
        <li className={`${styles.nav__item}`}>
          <Link className={`${styles.nav__link}`} to={"/menu"}>
            menu
          </Link>
        </li>
        <li className={`${styles.nav__item}`}>
          <Link className={`${styles.nav__link}`} to={"/news"}>
            news
          </Link>
        </li>
        <li className={`${styles.nav__item}`}>
          <Link className={`${styles.nav__link}`} to={"/about"}>
            about us
          </Link>
        </li>
        <li className={`${styles.nav__item}`}>
          <Link className={`${styles.nav__link}`} to={"/contact"}>
            contact us
          </Link>
        </li>
        {width > 700 ? null : (
          <li className={`${styles.nav__item}`}>
            <Button className={`${styles.nav__link}`} to={"/login"}>
              log in
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
