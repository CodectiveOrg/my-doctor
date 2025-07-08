"use client";

import { ReactElement } from "react";

import { useRouter } from "next/navigation";

import MingcuteExitLine from "@/icons/MingcuteExitLine";

import { fetchWithToast } from "@/utils/fetch-utils";

type Props = {
  className: string;
};

export default function SignOutButtonComponent({
  className,
}: Props): ReactElement {
  const router = useRouter();

  const signOutButtonClickHandler = async (): Promise<void> => {
    const result = await fetchWithToast<null>(
      "/api/auth/sign-out",
      {
        method: "POST",
      },
      "به امید دیدار!",
    );

    if (result.error) {
      return;
    }

    router.push("/");
  };

  return (
    <button className={className} onClick={signOutButtonClickHandler}>
      <MingcuteExitLine />
      خروج
    </button>
  );
}
