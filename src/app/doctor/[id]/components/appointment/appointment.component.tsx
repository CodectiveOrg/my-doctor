import { ReactElement } from "react";

import Link from "next/link";

import CardComponent from "@/components/card/card.component";

import { DetailedDoctorModel } from "@/models/detailed-doctor.model";

import styles from "./appointment.module.css";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function AppointmentComponent({ doctor }: Props): ReactElement {
  return (
    <CardComponent className={styles.appointment}>
      <header>
        <div className={styles.indicator}></div>
        <div className={styles.title}>همین الان نوبت دریافت کنید</div>
        <div className={styles.price}>
          {doctor.price.toLocaleString()} تومان
        </div>
      </header>
      <main>
        <ul className={styles.perks}>
          <li className={styles.perk}>
            تضمین بازپرداخت مبلغ ویزیت در صورت نارضایتی
          </li>
          <li className={styles.perk}>
            تا 3 روز می‌توانید هر سوالی دارید از پزشک بپرسید
          </li>
        </ul>
      </main>
      <footer>
        <Link href="#">دریافت نوبت</Link>
      </footer>
    </CardComponent>
  );
}
