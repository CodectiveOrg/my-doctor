import Prisma from "@prisma/client";

export type SafeUserType = Omit<Prisma.User, "id" | "password">;
