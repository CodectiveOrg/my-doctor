import { CommentModel } from "@/models/comment.model";
import { DoctorModel } from "@/models/doctor.model";

export type DetailedDoctorModel = DoctorModel & {
  experience: number;
  mcNumber: number;
  about: string;
  consultations: number;
  membershipDuration: string;
  price: number;
  phone: string;
  comments: CommentModel[];
};
