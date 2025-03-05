import { NextResponse } from "next/server";
import { ApiResponseType } from "@/types/api-response.type";

export async function wrapWithTryCatch<T>(
  callback: () => Promise<ApiResponseType<T>>,
): Promise<ApiResponseType<T>> {
  try {
    return await callback();
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "خطای غیرمنتظره رخ داد." },
      { status: 500 },
    );
  }
}
