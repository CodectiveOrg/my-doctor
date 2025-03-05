"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ButtonLinkComponent } from "@/components/button/button.component";

import clsx from "clsx";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/" className={clsx(pathname === "/" && styles.active)}>
              خانه
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className={clsx(pathname === "/search" && styles.active)}
            >
              جستجو
            </Link>
          </li>
        </ul>
      </nav>
      <ButtonLinkComponent
        variant="primary"
        shape="outlined"
        className={styles.cta}
        href="/auth/sign-in"
      >
        ورود | ثبت‌نام
      </ButtonLinkComponent>
    </header>
  );
}
