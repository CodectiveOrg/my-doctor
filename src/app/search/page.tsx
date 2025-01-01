import { ReactElement } from "react";

import FilterComponent from "@/app/search/components/filter/filter.component";

import styles from "./page.module.css";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function Page(): ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <FilterComponent
          title="زوج یا فرد"
          options={[
            { value: "even", label: "زوج" },
            { value: "odd", label: "فرد" },
          ]}
        />
        <FilterComponent
          title="بخش‌پذیری"
          options={[
            { value: "two", label: "بخش‌پذیر بر 2" },
            { value: "three", label: "بخش‌پذیر بر 3" },
            { value: "five", label: "بخش‌پذیر بر 5" },
            { value: "seven", label: "بخش‌پذیر بر 7" },
          ]}
        />
      </div>
      <ul className={styles.results}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
