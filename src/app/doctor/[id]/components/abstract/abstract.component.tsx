import { ReactElement } from "react";

import Image from "next/image";

import CardComponent from "@/components/card/card.component";

import { DetailedDoctorModel } from "@/models/detailed-doctor.model";

import styles from "./abstract.module.css";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function AbstractComponent({ doctor }: Props): ReactElement {
  return (
    <CardComponent className={styles.abstract}>
      <div className={styles.general}>
        <div className={styles.image}>
          <Image
            src={`https://cdn.paziresh24.com${doctor.image}`}
            alt="عکس پروفایل دکتر"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.name}>{doctor.name}</div>
        <div className={styles.experience}>{doctor.experience} سال تجربه</div>
        <div className={styles.mc}>شماره نظام پزشکی: {doctor.mcNumber}</div>
        <div className={styles.rating}>
          <span className={styles["average-rating"]}>
            {Math.floor(doctor.averageRating * 10) / 10} از 5
          </span>
          <span className={styles["total-votes"]}>
            ({doctor.totalVotes.toLocaleString()} نظر)
          </span>
        </div>
      </div>
      <div className={styles.badges}>
        {doctor.badges.map((badge) => (
          <div key={badge} className={styles.badge}>
            {badge}
          </div>
        ))}
      </div>
    </CardComponent>
  );
}
