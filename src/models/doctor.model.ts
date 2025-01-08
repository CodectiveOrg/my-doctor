export type DoctorModel = {
  id: string;
  name: string;
  image: string;
  isVerified: boolean;
  gender: string;
  averageRating: number;
  totalVotes: number;
  address: string;
  firstAvailableAppointment: string;
  brief: string;
  degree: string;
  expertise: string;
  badges: string[];
};
