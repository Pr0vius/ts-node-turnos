import { IUser } from "../../models/interfaces";
import config from "../../config";

import { api } from "../user.test";
export const initialUsers: IUser[] = [
  {
    username: "Shit",
    password: "123",
  },
];

export const getAllUsers = async () => {
  const response = await api.get(`${config.prefix}/users`);
  return response.body.data
};
