import { Types } from "mongoose";

export interface IUser {
  _id?: string;
  name?: string;
  email: string;
  username: string;
  password: string;
  company?: Types.ObjectId[];
}
export interface IUserLogin {
  email: string;
  password: string;
}
export interface ICompany {
  name: string;
  users: Types.ObjectId[];
  turns?: Types.ObjectId[];
}

export interface ITurn {
  turn: Date;
  for: string;
  completed: boolean;
  company: Types.ObjectId[];
}
