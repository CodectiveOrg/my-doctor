import { PropsWithChildren, ReactElement } from "react";

import clsx from "clsx";

import styles from "./card.module.css";

type Props = PropsWithChildren<{
  className?: string;
  title?: string;
}>;

export default function CardComponent({
  children,
  className,
  title,
}: Props): ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={clsx(styles.card, className)}>{children}</div>
    </div>
  );
}
