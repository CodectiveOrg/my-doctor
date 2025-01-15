"use client";

import { ReactElement, useContext } from "react";

import Link from "next/link";

import MingcuteStarFill from "@/icons/MingcuteStarFill";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

import { DoctorsContext } from "@/app/search/providers/doctors/doctors.provider";

import styles from "./results.module.css";

export default function ResultsComponent(): ReactElement {
  const { filteredDoctors } = useContext(DoctorsContext);

  return (
    <ul className={styles.results}>
      {filteredDoctors.map((doctor) => (
        <li key={doctor.id}>
          <div className={styles.header}>
            <div className={styles.image}>
              <img
                src={`https://cdn.paziresh24.com${doctor.image}`}
                alt="عکس پروفایل دکتر"
                width={150}
                height={150}
              />
            </div>
            <div className={styles.name}>{doctor.name}</div>
            <div className={styles.brief}>{doctor.brief}</div>
            <div className={styles.badges}>
              {doctor.badges.map((badge) => (
                <div key={badge} className={styles.badge}>
                  {badge}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.address}>
            <MingcuteLocationLine /> آدرس: {doctor.address}
          </div>
          <div className={styles.actions}>
            <div className={styles.rating}>
              <MingcuteStarFill className={styles.icon} />{" "}
              <span className={styles["average-rating"]}>
                {Math.floor(doctor.averageRating * 10) / 10}
              </span>{" "}
              <span className={styles["total-votes"]}>
                ({doctor.totalVotes} نظر)
              </span>
            </div>
            <div className={styles.caption}>
              اولین نوبت: {doctor.firstAvailableAppointment}
            </div>
            <Link href={`/doctor/${doctor.id}`}>نوبت‌دهی آنلاین</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
