import supertest from "supertest";
import server from "../loaders/server";
import User from "../models/UserSchema";
import config from "../config";
import { initialUsers, getAllUsers } from "./helpers";

export const api = supertest(server.app);
const { prefix } = config;

describe("GET /users:", () => {
  beforeEach(async () => {
    await User.deleteMany();
    await User.insertMany(initialUsers);
  });
  test("headers", async () => {
    await api
      .get(`${prefix}/user`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
  test("body", async () => {
    const content = await getAllUsers();
    expect(content).toContain("TheMan");
  });
});
