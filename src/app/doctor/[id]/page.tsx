import { ReactElement } from "react";
import { notFound } from "next/navigation";

import CardComponent from "@/components/card/card.component";

import { doctors } from "@/mock/doctors";

import { DetailedDoctorModel } from "@/models/detailed-doctor.model";

import AboutComponent from "./components/about/about.component";
import AbstractComponent from "./components/abstract/abstract.component";
import ActivitiesComponent from "./components/activities/activities.component";
import CommentComponent from "./components/comment/comment.component";
import VisitComponent from "./components/visit/visit.component";

import styles from "./page.module.css";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props): Promise<ReactElement> {
  const doctor = await getDoctor(params.id);

  if (!doctor) {
    return notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.info}>
        <AbstractComponent doctor={doctor} />
        <AboutComponent doctor={doctor} />
        <ActivitiesComponent doctor={doctor} />
        {doctor.comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>
      <div className={styles.actions}>
        <VisitComponent doctor={doctor} />
        <CardComponent className={styles.appointment}></CardComponent>
        <CardComponent className={styles.contact}></CardComponent>
      </div>
    </div>
  );
}

async function getDoctor(id: string): Promise<DetailedDoctorModel | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = doctors.find((x) => x.id === id);

      if (!result) {
        return resolve(result);
      }

      resolve({
        ...result,
        experience: 29,
        mcNumber: 58549,
        about: [
          "۲۹ سال سابقه طبابت",
          "رتبه برتر بورد تخصص از دانشگاه علوم پزشکی شهید بهشتی",
          "ویزیت آنلاین و‌ حضوری متخصص عفونی در زمینه های:",
          "مشاوره و درمان زخمهای مزمن، عروقی و زخم پای دیابتی با روش های نوین",
        ].join("\n"),
        consultations: 11995,
        membershipDuration: "4 سال و 1 ماه",
        price: 300_000,
        comments: [
          {
            id: "1",
            user: {
              id: "1",
              username: "karen",
              name: "کارن",
            },
            date: new Date(Date.now() - 5 * 24 * 3600 * 1000),
            rating: 5,
            text: [
              "علت مراجعه ما عفونت بعد از عمل جراحی بود. همسر من سه ماه پیش دچار شکستگی استخوان ران شد که متاسفانه در شهرستان بعد از جراحی دچار عفونت شدید محل عمل جراحی شد، هیچ پزشک دیگری هم به ما پذیرش نمیداد",
            ].join("\n"),
          },
          {
            id: "2",
            user: {
              id: "2",
              username: "azizeh",
              name: "عزیزه",
            },
            date: new Date(Date.now() - 17 * 24 * 3600 * 1000),
            rating: 4,
            text: [
              "بیماری من با سرفه و‌ تب و لرز و بیحالی و‌ بدن درد شروع شد سرفه های شدیدی داشتم کم کم تنگی نفس هم پیدا کردم‌ دکتر دستگیر وقتی کامل معاینه کردند گفتند ویروس جدید کرونا هست",
            ].join("\n"),
          },
          {
            id: "3",
            user: {
              id: "3",
              username: "alemeh",
              name: "عالمه",
            },
            date: new Date(Date.now() - 21 * 24 * 3600 * 1000),
            rating: 5,
            text: [
              "آقای دکتر بسیار با دقت و صبوری، به سوالات پاسخ میدهند، شرایط سنی بیمار و داروی مناسب برای سن بیمارشان رو حتما در نظر میگیرن. با صحبتهاشون، آرامش رو به بیمارشان میدن.",
            ].join("\n"),
          },
        ],
      });
    }, 0);
  });
}
