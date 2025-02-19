import { ReactElement } from "react";

import { ButtonLinkComponent } from "@/components/button/button.component";
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
        <ButtonLinkComponent variant="primary" shape="outlined" href="#">
          <MingcuteCalendarMonthLine />
          برنامه کاری پزشک
        </ButtonLinkComponent>
        <ButtonLinkComponent variant="primary" shape="outlined" href="#">
          <MingcutePhoneLine />
          {doctor.phone}
        </ButtonLinkComponent>
        <ButtonLinkComponent variant="primary" shape="outlined" href="#">
          <MingcuteLocationLine />
          مشاهده در نقشه و مسیریابی
        </ButtonLinkComponent>
      </div>
    </CardComponent>
  );
}
