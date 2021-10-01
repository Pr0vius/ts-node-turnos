import { Schema, Model, model } from "mongoose";
import { ICompany } from "./interfaces";

const companySchema = new Schema<ICompany, Model<ICompany>, ICompany>({
  name: { type: String, required: true },
  dates: [{ type: Date, required: true }],
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export default model<ICompany>("Company", companySchema);
