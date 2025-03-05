"use client";

import { ReactElement } from "react";

import { ButtonComponent } from "@/components/button/button.component";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  const signOutButtonClickHandler = async (): Promise<void> => {};

  return (
    <div className={styles.page}>
      <h1>داشبورد</h1>
      <ButtonComponent variant="danger" onClick={signOutButtonClickHandler}>
        خروج
      </ButtonComponent>
    </div>
  );
}
