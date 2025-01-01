import { ReactElement } from "react";

import { ItemType } from "@/type/item.type";

import styles from "./item.module.css";

type Props = {
  item: ItemType;
};

export default function ItemComponent({ item }: Props): ReactElement {
  return <li className={styles.item}>{item.value}</li>;
}
