import Prisma from "@prisma/client";

export type SignUpDto = Omit<Prisma.User, "id">;
