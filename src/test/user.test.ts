import User from "../models/UserSchema";
import config from "../config";
import { initialUsers, api } from "./helpers";

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
});
