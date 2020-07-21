export interface User {
  uid?: string;
  token?: string;
  currentToken?: string;
  name?: string;
  email?: string;
  rol?: string;
}

export interface UserRegistered {
  userId: string;
  fullName: string;
  rol: string;
  job: string;
}

export interface UsersCheckers {
  nameElaborated: string;
  jobElaborated: string;
  nameVerify: string;
  jobVerify: string;
}
