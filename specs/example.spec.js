
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("has crm module", function() {
    var mod = angular.module('crm');
    expect(mod).not.toBe(undefined);
  });
});
