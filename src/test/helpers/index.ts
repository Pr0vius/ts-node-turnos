import supertest from "supertest";
import server from "../../loaders/server";
import { IUser } from "../../models/interfaces";
import config from "../../config";
const { prefix } = config;

export const api = supertest(server.app);

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