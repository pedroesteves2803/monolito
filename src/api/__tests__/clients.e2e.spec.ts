import { app, sequelize } from "../express";
import request from "supertest";

describe("E2E test for client", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a client", async () => {
    const response = await request(app).post("/clients").send({
      id: "1",
      name: "Client 1",
      email: "client1@email.com",
      document: "123456789",
      address: "Street. 123",
    });

    expect(response.status).toEqual(201);
  });

  it("should not create a client when name is not provided", async () => {
    const response = await request(app).post("/clients").send({
      id: "1",
      email: "client1@email.com",
      document: "123456789",
      address: "Street. 123",
    });

    expect(response.status).toEqual(400);
  });
});
