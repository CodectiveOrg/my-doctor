import { ReactElement } from "react";

import Image from "next/image";

import notFoundImage from "@/assets/illustrations/not-found.svg";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import styles from "./not-found.module.css";

export default function NotFound(): ReactElement {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>404</div>
        <h1>صفحه‌ی مورد نظر پیدا نشد!</h1>
        <p>
          با عرض پوزش، لطفاً از طریق کادر جستجو، پزشک یا مرکز درمانی مورد نظر
          خود را جستجو کنید.
        </p>
      </div>
      <div className={styles.visuals}>
        <Image src={notFoundImage} alt="" />
      </div>
      <div className={styles.search}>
        <GlobalSearchBoxComponent />
      </div>
    </div>
  );
}
