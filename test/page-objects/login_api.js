const supertest = require("supertest");

const api = supertest("https://reqres.in");

const postLogin = (body) => api.post("/api/login").send(body);

const patchLogin = (body) => api.patch("/api/login").send(body);

module.exports = {
  postLogin,
  patchLogin,
};
