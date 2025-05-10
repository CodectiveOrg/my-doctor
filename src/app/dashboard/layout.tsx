import { ReactElement } from "react";

import SidebarComponent from "@/app/dashboard/components/sidebar/sidebar.component";

import styles from "./layout.module.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <div className={styles.layout}>
      <SidebarComponent />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
