import connectDatabase from "../loaders/database";
import { api, initialUsers } from "./helpers";
import User from "../models/UserSchema";
import config from "../config";

const { prefix } = config;

describe("POST AUTH/REGISTER: ", () => {
  let connection: any;
  beforeAll(async () => {
    connection = await connectDatabase();
  });
  test("headers", async () => {
    const response = await api
      .post(`${prefix}/register`)
      .send(initialUsers[0])
      .expect("Content-Type", /application\/json/)
      .expect(201);
  });
  test("body", async () => {
    const response = await api.post(`${prefix}/register`).send(initialUsers[0]);
    expect(response.body.data.username).toContain("theman69");
    expect(response.body.data.name).toContain("John Doe");
    expect(response.body.data.email).toContain("John@Doe.com");
    expect(response.body.data.password).toBeUndefined();
  });
  afterEach(async () => {
    await User.deleteMany();
  });
  afterAll(() => {
    connection.disconnect();
  });
});
