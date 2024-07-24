export interface User {
  id: number;
  name: string;
  roles: string[];
  updatedAt: Date;
  createdAt: Date;
  email: string;
  loginAttempts: number;
}

export interface LoginResult {
  exp: number;
  message: string;
  token: string;
  user: User;
}