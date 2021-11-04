import connectDatabase from "../loaders/database";
import { api, initialUsers } from "./helpers";
import User from "../models/UserSchema";
import config from "../config";

const { prefix } = config;
let connection: any;
beforeAll(async () => {
  connection = await connectDatabase();
});
afterEach(async () => {
  await User.deleteMany();
});
afterAll(() => {
  connection.disconnect();
});

describe("POST AUTH/REGISTER: ", () => {
  test("headers", async () => {
    await api
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
});

describe("POST AUTH/LOGIN", () => {
  test("headers", async () => {
    await api.post(`${prefix}/register`).send(initialUsers[0]);
    await api
      .post(`${prefix}/login`)
      .send({
        email: initialUsers[0].email,
        password: initialUsers[0].password,
      })
      .expect("Content-Type", /application\/json/)
      .expect(200);
  });
  test("body", async () => {
    await api.post(`${prefix}/register`).send(initialUsers[0]);
    const response = await api.post(`${prefix}/login`).send({
      email: initialUsers[0].email,
      password: initialUsers[0].password,
    });
    expect(response.body.message).toBe("Ok");
    expect(response.body.data.username).toContain("theman69");
    expect(response.body.data.name).toContain("John Doe");
    expect(response.body.data.email).toContain("John@Doe.com");
    expect(response.body.data.password).toBeUndefined();
  });
});
