const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const testDataLogin = require('../page-objects/login_api.js');
const loginSchema = require('../helper/schema/login_schema.json');
const requestData = require('../helper/data/login_data.json');
const responseStatus = require('../helper/status-response/common_status_response.json');

const testScenario = {
  describePositivePostLogin: 'As a User, I should be able to Login',
  successPostLoginWithValidRequestParameter: 'with valid request parameter',
  
  describeNegativePostLogin: 'As a User, I should not be able to Login',
  failPostLoginWithTheEmailFieldIsInvalidUser: 'with the email field is invalid user',
  failPostLoginWithTheEmailFieldIsEmpty: 'with the email field is empty',
  failPostLoginWithMissingEmailField: 'with missing password field',
  failPostLoginWithThePasswordFieldIsEmpty: 'with the password field is empty',
  failPostLoginWithMissingPasswordField: 'with missing password field',
  failPostLoginWithEmptyRequestBody: 'with empty request body',
  failPostLoginWithInvalidHttpMethod: 'with invalid HTTP method',
};

describe(testScenario.describePositivePostLogin, () => {
  it(`@positive @login ${testScenario.successPostLoginWithValidRequestParameter}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.loginValidData));
    const response = await testDataLogin.postLogin(body);
    expect(response.status).to.equal(responseStatus.successResponses.OK.code);
    expect(response.body).to.be.jsonSchema(loginSchema.postSuccessLogin);
  });
});

describe(testScenario.describeNegativePostLogin, () => {
  it(`@negative @login ${testScenario.failPostLoginWithTheEmailFieldIsInvalidUser}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.loginEmptyEmailData));
    const response = await testDataLogin.postLogin(body);
    expect(response.status).to.equal(responseStatus.errorResponses.BadRequest.code);
    expect(response.body).to.be.jsonSchema(loginSchema.postFailLogin);
  });
  
  it(`@negative @login ${testScenario.failPostLoginWithTheEmailFieldIsEmpty}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.loginEmptyEmailData));
    const response = await testDataLogin.postLogin(body);
    expect(response.status).to.equal(responseStatus.errorResponses.BadRequest.code);
    expect(response.body).to.be.jsonSchema(loginSchema.postFailLogin);
  });
  
  it(`@negative @login ${testScenario.failPostLoginWithMissingEmailField}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.loginMissingEmailData));
    const response = await testDataLogin.postLogin(body);
    expect(response.status).to.equal(responseStatus.errorResponses.BadRequest.code);
    expect(response.body).to.be.jsonSchema(loginSchema.postFailLogin);
  });
  
  it(`@negative @login ${testScenario.failPostLoginWithThePasswordFieldIsEmpty}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.loginEmptyPasswordData));
    const response = await testDataLogin.postLogin(body);
    expect(response.status).to.equal(responseStatus.errorResponses.BadRequest.code);
    expect(response.body).to.be.jsonSchema(loginSchema.postFailLogin);
  });
  
  it(`@negative @login ${testScenario.failPostLoginWithMissingPasswordField}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.loginMissingPasswordData));
    const response = await testDataLogin.postLogin(body);
    expect(response.status).to.equal(responseStatus.errorResponses.BadRequest.code);
    expect(response.body).to.be.jsonSchema(loginSchema.postFailLogin);
  });
  
  it(`@negative @login ${testScenario.failPostLoginWithEmptyRequestBody}`, async function () {
    const body = {};
    const response = await testDataLogin.postLogin(body);
    expect(response.status).to.equal(responseStatus.errorResponses.BadRequest.code);
    expect(response.body).to.be.jsonSchema(loginSchema.postFailLogin);
  });
  
  it(`@negative @login ${testScenario.failPostLoginWithInvalidHttpMethod}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.loginValidData));
    const response = await testDataLogin.patchLogin(body);
    expect(response.status).to.equal(responseStatus.errorResponses.NotFound.code);
  });
});
