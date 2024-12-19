const supertest = require("supertest");

const api = supertest("https://reqres.in");

const postRegister = (body) => api.post("/api/register").send(body);

const patchRegister = (body) => api.patch("/api/register").send(body);

module.exports = {
  postRegister,
  patchRegister,
};
