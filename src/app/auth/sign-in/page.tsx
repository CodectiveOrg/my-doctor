import { ReactElement } from "react";

import SignInFormComponent from "@/app/auth/components/sign-in-form/sign-in-form.component";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  return (
    <div className={styles.page}>
      <SignInFormComponent />
    </div>
  );
}
