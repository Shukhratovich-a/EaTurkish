import styles from "./HeadingSmall.module.scss";

const HeadingSmall = ({ className, children }) => {
  return <h2 className={`${styles.heading} ${className}`}>{children}</h2>;
};

export default HeadingSmall;
