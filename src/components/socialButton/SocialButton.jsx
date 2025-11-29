import styles from "./SocialButton.module.css";

const SocialButton = ({ route, image, order }) => {
  const orderStyle = {
    bottom: `${20 + 80 * order}px`
  };

  return (
    <a href={route} target="_blank" className={styles.socialLink} style={orderStyle}>
      <img className={styles.icon} src={image} alt="контакт" />
    </a>
  );
};

export default SocialButton;
