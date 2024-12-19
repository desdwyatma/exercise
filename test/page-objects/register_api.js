const supertest = require("supertest");

const api = supertest("https://reqres.in");

const postRegister = (body) =>
  api.post("/api/register").set("Content-Type", "application/json").send(body);

const patchRegister = (body) =>
  api.patch("/api/register").set("Content-Type", "application/json").send(body);

module.exports = {
  postRegister,
  patchRegister,
};
