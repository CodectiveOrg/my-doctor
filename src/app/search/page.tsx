import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import styles from "./page.module.css";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function Page(): ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <CardComponent>
          <div className={styles.title}>زوج یا فرد</div>
          <button>زوج</button>
          <button>فرد</button>
        </CardComponent>
      </div>
      <ul className={styles.results}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
