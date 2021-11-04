import { Schema, Model, model } from "mongoose";
import { ITurn } from "./interfaces";

const TurnSchema = new Schema<ITurn, Model<ITurn>, ITurn>({
  turn: { type: Date, required: true },
  for: { type: String, required: true },
  completed: { type: Boolean, required: true },
  company: [{ type: Schema.Types.ObjectId, required: true }],
});

export default model<ITurn>("Turn", TurnSchema);
