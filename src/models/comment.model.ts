import { UserModel } from "@/models/user.model";

export type CommentModel = {
  id: string;
  user: UserModel;
  date: Date;
  rating: number;
  text: string;
};
