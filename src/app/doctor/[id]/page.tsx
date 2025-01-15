import { ReactElement } from "react";

import { notFound } from "next/navigation";

import { doctors } from "@/mock/doctors";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props): ReactElement {
  const doctor = doctors.find((x) => x.id === params.id);

  if (!doctor) {
    return notFound();
  }

  return <div>{doctor?.name}</div>;
}
