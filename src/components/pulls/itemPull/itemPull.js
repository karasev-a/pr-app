import styles from "./itemPull.module.scss";

const ItemPull = ({ pull }) => {
  const { title, user, commentsNumber } = pull;

  return (
    <div className={styles.itemPull}>
      <p className={styles.name}>{title}</p>
      <p className={styles.author}>{user.login}</p>
      <p className={styles.comments}>{commentsNumber}</p>
    </div>
  );
};

export default ItemPull;
