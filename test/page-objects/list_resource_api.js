const supertest = require("supertest");

const api = supertest("https://reqres.in");

const getListResource = (param) => api.get(`/api/unknown${param}`);

const patchListResource = () => api.patch("/api/unknown");

module.exports = {
  getListResource,
  patchListResource,
};
