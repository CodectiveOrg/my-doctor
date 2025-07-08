"use client";

import { ReactElement } from "react";

import ProfileFormComponent from "@/app/dashboard/components/profile-form/profile-form.component";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <div className={styles.page}>
      <ProfileFormComponent />
    </div>
  );
}
