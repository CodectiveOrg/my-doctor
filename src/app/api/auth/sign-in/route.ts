import { NextResponse } from "next/server";

import { SignInDto } from "@/dto/auth.dto";

import prisma from "@/lib/prisma";

import { ApiResponseType } from "@/types/api-response.type";

import { parseBody, setAuthCookie, wrapWithTryCatch } from "@/utils/api.utils";

export async function POST(request: Request): Promise<ApiResponseType<null>> {
  return wrapWithTryCatch(async () => {
    const [parseError, body] = await parseBody<SignInDto>(request);

    if (parseError !== null) {
      return NextResponse.json({ error: parseError }, { status: 400 });
    }

    const foundUser = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (!foundUser) {
      return NextResponse.json(
        { error: "کاربری با این مشخصات پیدا نشد." },
        { status: 404 },
      );
    }

    if (body.password !== foundUser.password) {
      return NextResponse.json(
        { error: "رمز عبور اشتباه است." },
        { status: 401 },
      );
    }

    await setAuthCookie();

    return NextResponse.json({ data: null }, { status: 200 });
  });
}
