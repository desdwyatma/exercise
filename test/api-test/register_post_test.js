const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const testDataRegister = require('../page-objects/register_api.js');
const registerSchema = require('../helper/schema/register_schema.json');
const requestData = require('../helper/data/register_data.json');
const responseStatus = require('../helper/status-response/common_status_response.json');

const testScenario = {
  describePositivePostRegister: 'As a User, I should be able to Register',
  successPostRegisterWithValidRequestParameter: 'with valid request to parameter',
  
  describeNegativePostRegister: 'As a User, I should not be able Register',
  failPostRegisterWithTheEmailFieldIsEmpty: 'with the email field is empty',
  failPostRegisterWithMissingEmailField: 'with missing email field',
  failPostRegisterWithThePasswordFieldIsEmpty: 'with the password field is empty',
  failPostRegisterWithMissingPasswordField: 'with missing password field',
  failPostRegisterWithEmptyRequestBody: 'with empty request body',
  failPostRegisterWithInvalidHttpMethod: 'with invalid HTTP method',
};

describe(testScenario.describePositivePostRegister, () => {
  it(`@positive @register ${testScenario.successPostRegisterWithValidRequestParameter}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.registerValidData));
    const response = await testDataRegister.postRegister(body);
    expect(response.status).to.equal(responseStatus.successResponses.OK.code);
    expect(response.body).to.be.jsonSchema(registerSchema.postSuccessRegister);
  });
});

describe(testScenario.describeNegativePostRegister, () => {
  it(`@negative @register ${testScenario.failPostRegisterWithTheEmailFieldIsEmpty}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.registerEmptyEmailData));
    const response = await testDataRegister.postRegister(body);
    expect(response.status).to.equal(responseStatus.errorResponses.BadRequest.code);
    expect(response.body).to.be.jsonSchema(registerSchema.postFailRegister);
  });
  
  it(`@negative @register ${testScenario.failPostRegisterWithMissingEmailField}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.registerMissingEmailData));
    const response = await testDataRegister.postRegister(body);
    expect(response.status).to.equal(responseStatus.errorResponses.BadRequest.code);
    expect(response.body).to.be.jsonSchema(registerSchema.postFailRegister);
  });
  
  it(`@negative @register ${testScenario.failPostRegisterWithThePasswordFieldIsEmpty}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.registerEmptyPasswordData));
    const response = await testDataRegister.postRegister(body);
    expect(response.status).to.equal(responseStatus.errorResponses.BadRequest.code);
    expect(response.body).to.be.jsonSchema(registerSchema.postFailRegister);
  });
  
  it(`@negative @register ${testScenario.failPostRegisterWithMissingPasswordField}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.registerMissingPasswordData));
    const response = await testDataRegister.postRegister(body);
    expect(response.status).to.equal(responseStatus.errorResponses.BadRequest.code);
    expect(response.body).to.be.jsonSchema(registerSchema.postFailRegister);
  });
  
  it(`@negative @register ${testScenario.failPostRegisterWithEmptyRequestBody}`, async function () {
    const body = {};
    const response = await testDataRegister.postRegister(body);
    expect(response.status).to.equal(responseStatus.errorResponses.BadRequest.code);
    expect(response.body).to.be.jsonSchema(registerSchema.postFailRegister);
  });
  
  it(`@negative @register ${testScenario.failPostRegisterWithInvalidHttpMethod}`, async function () {
    const body = JSON.parse(JSON.stringify(requestData.registerValidData));
    const response = await testDataRegister.patchRegister(body);
    expect(response.status).to.equal(responseStatus.errorResponses.NotFound.code);
  });
});
