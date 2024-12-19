const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const testDataListResource = require('../page-objects/list_resource_api.js');
const listResourceSchema = require('../helper/schema/list_resource_schema.json');
const responseStatus = require('../helper/status-response/common_status_response.json');

const testScenario = {
  describePositiveGetListResource: 'As a User, I should be able to get List Resource',
  successGetListResourceWithValidRequestParameter: 'with valid request parameter',
  successGetOneListResourceWithValidRequestParameter: 'only one resource with valid request parameter',
  
  describeNegativeGetListResource: 'As a User, I should not be able to get List Resource',
  failGetListResourceWithListOfDataDoesNotExist: 'with list of data does not exist',
  failGetListResourceWithInvalidHttpMethod: 'with invalid HTTP method',
};

describe(testScenario.describePositiveGetListResource, () => {
  it(`@positive @list-resource ${testScenario.successGetListResourceWithValidRequestParameter}`, async function () {
    const response = await testDataListResource.getListResource();
    expect(response.status).to.equal(responseStatus.successResponses.OK.code);
    expect(response.body).to.be.jsonSchema(listResourceSchema.getSuccessListResource);
  });

  it(`@positive @list-resource ${testScenario.successGetListResourceWithValidRequestParameter}`, async function () {
    const response = await testDataListResource.getListResource('/2');
    expect(response.status).to.equal(responseStatus.successResponses.OK.code);
    expect(response.body).to.be.jsonSchema(listResourceSchema.getSuccessOneListResource);
  });
});

describe(testScenario.describeNegativeGetListResource, () => {
  it(`@negative @list-resource ${testScenario.failGetListResourceWithListOfDataDoesNotExist}`, async function () {
    const response = await testDataListResource.getListResource('/23');
    expect(response.status).to.equal(responseStatus.errorResponses.NotFound.code);
  });

  it(`@negative @list-resource ${testScenario.failGetListResourceWithInvalidHttpMethod}`, async function () {
    const response = await testDataListResource.patchListResource();
    expect(response.status).to.equal(responseStatus.errorResponses.NotFound.code);
  });
});
