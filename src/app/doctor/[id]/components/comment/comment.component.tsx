import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import MingcuteStarFill from "@/icons/MingcuteStarFill";

import { CommentModel } from "@/models/comment.model";

import styles from "./comment.module.css";

const formatter = new Intl.RelativeTimeFormat("fa-IR-u-nu-latn");

type Props = {
  comment: CommentModel;
};

export default function CommentComponent({ comment }: Props): ReactElement {
  const relativeTimeInDays = Math.floor(
    (+comment.date - Date.now()) / (24 * 3600 * 1000),
  );

  return (
    <CardComponent className={styles.comment}>
      <div className={styles.header}>
        <div className={styles.image}>{comment.user.name[0].toUpperCase()}</div>
        <div className={styles.name}>{comment.user.name}</div>
        <div className={styles.date}>
          {formatter.format(relativeTimeInDays, "days")}
        </div>
        <div className={styles.rating}>
          {comment.rating} <MingcuteStarFill className={styles.icon} />
        </div>
      </div>
      <div className={styles.text}>{comment.text}</div>
    </CardComponent>
  );
}
