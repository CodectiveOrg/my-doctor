import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import { DetailedDoctorModel } from "@/models/detailed-doctor.model";

import styles from "./about.module.css";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function AboutComponent({ doctor }: Props): ReactElement {
  return (
    <CardComponent className={styles.about} title="درباره من">
      {doctor.about}
    </CardComponent>
  );
}
