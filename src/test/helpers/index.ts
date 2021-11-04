import { IUser } from "../../models/interfaces";
import config from "../../config";
import { api } from "../user.test";
const { prefix } = config;

export const initialUsers: IUser[] = [
  {
    name: "John Doe",
    email: "John@Doe.com",
    username: "theman69",
    password: "12345678",
  },
];

export const getAllUsers = async () => {
  const response = await api.get(`${prefix}/users`);
  return response.body.data;
};
export const registerUser = async () => {
  const response = await api.post(`${prefix}/register`).send(initialUsers[0]);
  return response.body.data
};
