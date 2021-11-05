import { api } from "./helpers";
import config from "../config";
import connectDatabase from "../loaders/database";

const { prefix } = config;
let connection: any;
beforeAll(async () => {
  connection = await connectDatabase();
});
afterAll(() => {
  connection.disconnect();
});

describe("GET COMPANY/ALL", () => {
  test("headers", async () => {
    await api
      .get(`${prefix}/`)
      .expect("Content-Type", /application\/json/)
      .expect(200);
  });
  test("body", async () => {
    const response = await api.get(`${prefix}/`).set('authorization', "test")
    expect(response.body.data).toBeNull();
  });
});
