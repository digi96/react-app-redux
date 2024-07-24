import { User } from "./payload-type";

export interface AuthState {
  user: User;
  jwtToken: string;
}