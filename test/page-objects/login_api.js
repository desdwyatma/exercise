const supertest = require("supertest");

const api = supertest("https://reqres.in");

const postLogin = (body) =>
  api.post("/api/login").set("Content-Type", "application/json").send(body);

const patchLogin = (body) =>
  api.patch("/api/login").set("Content-Type", "application/json").send(body);

module.exports = {
  postLogin,
  patchLogin,
};
