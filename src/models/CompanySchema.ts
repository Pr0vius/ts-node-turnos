import { Schema, Model, model } from "mongoose";
import { ICompany } from "./interfaces";

const companySchema = new Schema<ICompany, Model<ICompany>, ICompany>({
  name: { type: String, required: true, unique: true },
  turns: [{ type: Schema.Types.ObjectId, ref: "Turn" }],
  users: [{ type: Schema.Types.ObjectId, ref: "User", unique: true }],
});

export default model<ICompany>("Company", companySchema);
