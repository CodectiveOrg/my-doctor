"use client";

import { ReactElement, useContext } from "react";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./item.module.css";

type Props = {
  item: number;
};

export default function ItemComponent({ item }: Props): ReactElement {
  const { filters } = useContext(FiltersContext);

  return <li className={styles.item}>{item}</li>;
}
