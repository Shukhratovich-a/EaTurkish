import React from "react";
import { Link } from "react-router-dom";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useNav from "../../Hooks/useNav";

import Nav from "../Nav/Nav";

import Button from "../Lib/Button/Button";

import Logo from "../../Assets/Images/Logo/Logo.webp";
import Burger from "../Lib/Icons/Burger";
import Close from "../Lib/Icons/Close";

import styles from "./Header.module.scss";

const Header = () => {
  const { width } = useWindowDimensions();

  const [isOpen, setIsOpen] = useNav();

  React.useEffect(() => {
    if (isOpen) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.container} container`}>
        <Link className={`${styles.header__link}`} to={"/"} onClick={() => setIsOpen(false)}>
          <img
            className={`${styles.header__logo}`}
            src={Logo}
            alt={"EaTurkish's logo"}
            width={width > 700 ? 135 : 125}
            height={width > 700 ? 47 : 44}
          />
        </Link>

        <Nav />

        {width > 700 ? null : (
          <button className={`${styles.header__burger}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Close /> : <Burger />}
          </button>
        )}

        {width > 700 ? <Button to={"/login"}>log in</Button> : null}
      </div>
    </header>
  );
};

export default Header;
