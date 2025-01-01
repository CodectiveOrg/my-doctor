import { ReactElement } from "react";

import ItemComponent from "@/app/search/components/item/item.component";

import styles from "./list.module.css";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function ListComponent(): ReactElement {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <ItemComponent key={item} item={item} />
      ))}
    </ul>
  );
}
