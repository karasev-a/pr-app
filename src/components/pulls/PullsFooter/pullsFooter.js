import styles from "./pullsFooter.module.scss";

const PullsFooter = ({ handleClickMore }) => {
  return (
    <div className={styles.pullsFooter}>
      <button onClick={handleClickMore}>Load more</button>
    </div>
  );
};

export default PullsFooter;
