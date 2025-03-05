import { NextResponse } from "next/server";

import { SignUpDto } from "@/dto/auth.dto";

import prisma from "@/lib/prisma";

import { ApiResponseType } from "@/types/api-response.type";

import { parseBody, wrapWithTryCatch } from "@/utils/api.utils";

export async function POST(request: Request): Promise<ApiResponseType<null>> {
  return wrapWithTryCatch(async () => {
    const [parseError, body] = await parseBody<SignUpDto>(request);

    if (parseError !== null) {
      return NextResponse.json({ error: parseError }, { status: 400 });
    }

    let foundUser = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (foundUser) {
      return NextResponse.json(
        { error: "نام کاربری تکراری است." },
        { status: 400 },
      );
    }

    foundUser = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (foundUser) {
      return NextResponse.json({ error: "ایمیل تکراری است." }, { status: 400 });
    }

    await prisma.user.create({ data: body });

    return NextResponse.json({ data: null }, { status: 201 });
  });
}
