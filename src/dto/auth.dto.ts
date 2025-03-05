import Prisma from "@prisma/client";

export type SignUpDto = Omit<Prisma.User, "id">;
export type SignInDto = Pick<Prisma.User, "username" | "password">;
