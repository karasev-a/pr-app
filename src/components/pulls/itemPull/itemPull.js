import styles from "./itemPull.module.scss";

const ItemPull = ({ pull }) => {
  const { title, user, commentsNumber } = pull;

  return (
    <div className={styles.itemPull}>
      <div className={styles.name}>{title}</div>
      <div className={styles.author}>{user.login}</div>
      {commentsNumber > 0 ? (
        <div className={styles.comments}>
          <img src="/message.svg" alt="Message icon" className={styles.icon} />
          {commentsNumber}
        </div>
      ) : null}
    </div>
  );
};

export default ItemPull;
