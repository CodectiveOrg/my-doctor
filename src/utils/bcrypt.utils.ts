import bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
}

export function comparePassword(
  password: string,
  hashed: string,
): Promise<boolean> {
  return bcrypt.compare(password, hashed);
}
