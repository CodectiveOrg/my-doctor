import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import MingcuteMessage4Line from "@/icons/MingcuteMessage4Line";
import MingcuteCalendarMonthLine from "@/icons/MingcuteCalendarMonthLine";

import { DetailedDoctorModel } from "@/models/detailed-doctor.model";

import styles from "./activities.module.css";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function ActivitiesComponent({ doctor }: Props): ReactElement {
  return (
    <CardComponent className={styles.activities} title="فعالیت‌ها">
      <div className={styles.activity}>
        <MingcuteMessage4Line />
        <p>
          <span className={styles.highlight}>{doctor.consultations}</span>{" "}
          مشاوره فعال
        </p>
      </div>
      <div className={styles.activity}>
        <MingcuteCalendarMonthLine /> دکتر من بیش از{" "}
        <p>
          <span className={styles.highlight}>{doctor.membershipDuration}</span>{" "}
          افتخار میزبانی از صفحه اختصاصی {doctor.name} را داشته است.
        </p>
      </div>
    </CardComponent>
  );
}
