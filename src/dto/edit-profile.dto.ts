import Prisma from "@prisma/client";

export type EditProfileDto = Partial<Omit<Prisma.User, "id">>;
