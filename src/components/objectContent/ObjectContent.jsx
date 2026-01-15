import styles from "./ObjectContent.module.css";

const ObjectContent = ({ content }) => {
  return (
    <div className={styles.content}>
      {content.map((block, i) => {
        switch (block.type) {
          case "text":
            return (
              <p key={i} className={styles.text}>
                {block.text}
              </p>
            );
          case "iconText":
            return (
              <div key={i} className={styles.iconBlock}>
                <img
                  src={block.icon}
                  alt={block.title}
                  className={styles.icon}
                />
                <div>
                  <h3 className={styles.iconTitle}>{block.title}</h3>
                  <p className={styles.iconText}>{block.text}</p>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ObjectContent;
