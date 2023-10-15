import ItemPull from "./itemPull/itemPull";

import styles from "./pulls.module.scss";

const items = [
  {
    id: 1,
    name: "Item 1",
    author: "Author 1",
    comments: 10,
  },
  {
    id: 2,
    name: "Item 2",
    author: "Author 2",
    comments: 20,
  },
  {
    id: 3,
    name: "Item 3",
    author: "Author 3",
    comments: 15,
  },
  // Add more items as needed
];

const PullsList = ({ list = items }) => {
  return (
    <div className={styles.list}>
      {list.length > 0 &&
        list.map((item) => <ItemPull key={item.id} pull={item} />)}
    </div>
  );
};

export default PullsList;
