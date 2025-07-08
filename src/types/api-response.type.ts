import { NextResponse } from "next/server";

export type FetchDataType<TData> =
  | { data: TData; error?: undefined }
  | { data?: undefined; error: string };

export type ApiResponseType<TData> = NextResponse<FetchDataType<TData>>;
