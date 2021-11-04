import supertest from "supertest";
import server from "../loaders/server";
import User from "../models/UserSchema";
import config from "../config";
import { registerUser } from "./helpers";

export const api = supertest(server.app);
const { prefix } = config;

describe("POST AUTH/REGISTER: ", () => {
  beforeEach(async () => {
    await User.deleteMany();
  }, 60000);
  test("headers", async () => {
    await api
      .post(`${prefix}/register`)
      .expect("Content-Type", /application\/json/);
  }, 60000);
  test("body", async () => {
    const content = await registerUser();
    expect(content).toContain('TheMan')
  },60000);
});
