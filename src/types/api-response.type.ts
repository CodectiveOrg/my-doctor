import { NextResponse } from "next/server";

export type fetchDataType<TData> =
  | { data: TData; error?: undefined }
  | { data?: undefined; error: string };

export type ApiResponseType<TData> = NextResponse<fetchDataType<TData>>;
