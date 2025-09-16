import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  password: string;
  confirmPassword: string;
  total: number;
  haveCoupon: boolean;
  couponCode?: string;
  
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  
  setPassword: (v: string) => void;
  setConfirmPassword: (v: string) => void;
  setHaveCoupon: (v: boolean) => void;
  setCouponCode: (v: string) => void;
  computeTotal: () => void;
  reset: () => void;
}
export type { MarathonFormState }