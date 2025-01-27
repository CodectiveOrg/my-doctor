import { ReactElement } from "react";

import Link from "next/link";

import CardComponent from "@/components/card/card.component";

import MingcuteCalendarMonthLine from "@/icons/MingcuteCalendarMonthLine";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcutePhoneLine from "@/icons/MingcutePhoneLine";

import { DetailedDoctorModel } from "@/models/detailed-doctor.model";

import styles from "./contact.module.css";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function ContactComponent({ doctor }: Props): ReactElement {
  return (
    <CardComponent className={styles.contact} title="آدرس و تلفن تماس">
      <div className={styles.info}>
        <div className={styles.title}>مطب {doctor.name}</div>
        <div className={styles.address}>{doctor.address}</div>
      </div>
      <div className={styles.actions}>
        <Link href="#">
          <MingcuteCalendarMonthLine />
          برنامه کاری پزشک
        </Link>
        <Link href="#">
          <MingcutePhoneLine />
          {doctor.phone}
        </Link>
        <Link href="#">
          <MingcuteLocationLine />
          مشاهده در نقشه و مسیریابی
        </Link>
      </div>
    </CardComponent>
  );
}
