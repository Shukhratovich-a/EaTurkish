import { Link } from "react-router-dom";

import Logo from "../../Assets/Images/Logo/Logo.webp";

import Facebook from "../Lib/Socials/Facebook";
import Twitter from "../Lib/Socials/Twitter";
import Instagram from "../Lib/Socials/Instagram";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.footer__inner}`}>
          <div className={`${styles.footer__wrapper}`}>
            <h4 className={`${styles.footer__wrapper__heading}`}>Contact Us</h4>

            <p className={`${styles.footer__wrapper__text}`}>9 W 53rd St, London, NY 10019, UK</p>

            <p className={`${styles.footer__wrapper__text}`}>
              <a className={`${styles.footer__wrapper__link}`} href="tel:+12123441230">
                +1 212-344-1230
              </a>
              <a className={`${styles.footer__wrapper__link}`} href="tel:+12125551230">
                +1 212-555-1230
              </a>
            </p>
          </div>

          <div className={`${styles.footer__wrapper}`}>
            <Link className={`${styles.footer__link}`} to={"/"}>
              <img
                className={`${styles.footer__image}`}
                src={Logo}
                alt="EaTurkish"
                width={336}
                height={117}
              />
            </Link>

            <p className={`${styles.footer__wrapper__text}`}>
              "The best way to find yourself is to lose yourself in the service of others.”
            </p>

            <ul className={`${styles.footer__socials}`}>
              <li className={`${styles.footer__social}`}>
                <a className={`${styles.footer__social__link}`} href="#link">
                  <Facebook />
                </a>
              </li>
              <li className={`${styles.footer__social}`}>
                <a className={`${styles.footer__social__link}`} href="#link">
                  <Twitter />
                </a>
              </li>
              <li className={`${styles.footer__social}`}>
                <a className={`${styles.footer__social__link}`} href="#link">
                  <Instagram />
                </a>
              </li>
            </ul>

            <p className={`${styles.footer__wrapper__copyright}`}>
              2022 Pop online. All Rights reserved.
            </p>
          </div>

          <div className={`${styles.footer__wrapper}`}>
            <h4 className={`${styles.footer__wrapper__heading}`}>Working Hours</h4>

            <p className={`${styles.footer__wrapper__text}`}>
              <span className={`${styles.footer__wrapper__link}`}>Monday-Friday:</span>
              <span className={`${styles.footer__wrapper__link}`}>08:00 am -12:00 am</span>
            </p>

            <p className={`${styles.footer__wrapper__text}`}>
              <span className={`${styles.footer__wrapper__link}`}>Saturday-Sunday:</span>
              <span className={`${styles.footer__wrapper__link}`}>07:00am -11:00 pm</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
