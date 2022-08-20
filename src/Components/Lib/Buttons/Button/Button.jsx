import { useNavigate } from "react-router-dom";

import styles from "./Button.module.scss";

const Button = ({ className, children, onClick, to }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick ? onClick : () => navigate(to)}
    >
      {children}
    </button>
  );
};

export default Button;
