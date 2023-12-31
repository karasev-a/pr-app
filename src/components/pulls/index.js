import ItemPull from "./itemPull/itemPull";

import styles from "./pulls.module.scss";

const PullsList = ({ pulls }) => {
  return (
    <div className={styles.list}>
      {pulls?.length > 0 &&
        pulls.map((item) => <ItemPull key={item.id} pull={item} />)}
    </div>
  );
};

export default PullsList;
