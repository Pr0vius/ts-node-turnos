import { Schema, Model, model } from "mongoose";
import { IUser } from "./interfaces";

const userSchema = new Schema<IUser, Model<IUser>, IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  company: [{ type: Schema.Types.ObjectId, ref: "Company" }],
});

export default model<IUser>("User", userSchema);
