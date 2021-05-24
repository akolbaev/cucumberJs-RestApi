const { Given, When, Then, AfterAll, After } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const restHelper = require("./../utils/restHelper");
let resp = {};
let url;

Given(/^a url:$/, function (dataTable) {
  assert.notEqual(url, null);
  this.url = dataTable.raw().toString();
});

When("I send a GET request", async function () {
  this.resp = await restHelper.getData(this.url);
  assert.notEqual(this.response, null);
});

Then("I receive response code 200", function () {
  assert.notEqual(this.response, null);
  assert.equal(this.resp.status, 200);
  assert.equal(this.resp.statusText, "OK");
});

Then(/I should get data description:$/, function (dataTable) {
  const data = dataTable.hashes()[0];
  assert.equal(this.resp.data.name, data.name);
  assert.equal(this.resp.data.description, data.description);
  assert.equal(this.resp.data.type, data.type);
});

Then(/I should get custodialAccounts:$/, function (dataTable) {
  assert.deepStrictEqual(this.resp.data.custodialAccounts, dataTable.hashes());
});

Then("I should get <{int}> trade_docs", function (int) {
  assert.equal(this.resp.data.trade_docs.length, int);
});
