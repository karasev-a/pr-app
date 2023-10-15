import styles from "./itemPull.module.scss";

const ItemPull = ({ pull }) => {
  const { name, author, comments } = pull;

  return (
    <div className={styles.itemPull}>
      <p className={styles.name}>{name}</p>
      <p className={styles.author}>{author}</p>
      <p className={styles.comments}>{comments}</p>
    </div>
  );
};

export default ItemPull;
