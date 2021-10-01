import { PopulatedDoc, Document } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  password: string;
  company: PopulatedDoc<ICompany & Document>;
}

export interface ICompany {
  name: string;
  dates: PopulatedDoc<Document>;
  users: PopulatedDoc<IUser & Document>;
}
