import { ReactElement } from "react";

import FilterComponent from "@/app/search/components/filter/filter.component";

import FiltersProvider from "@/app/search/providers/filters/filters.provider";

import styles from "./page.module.css";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function Page(): ReactElement {
  return (
    <FiltersProvider>
      <div className={styles.page}>
        <div className={styles.filters}>
          <FilterComponent
            title="زوج یا فرد"
            options={[
              { key: "even", label: "زوج" },
              { key: "odd", label: "فرد" },
            ]}
          />
          <FilterComponent
            title="بخش‌پذیری"
            options={[
              { key: "three", label: "بخش‌پذیر بر 3" },
              { key: "five", label: "بخش‌پذیر بر 5" },
              { key: "seven", label: "بخش‌پذیر بر 7" },
            ]}
          />
        </div>
        <ul className={styles.results}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </FiltersProvider>
  );
}
