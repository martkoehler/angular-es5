
describe("A suite", function() {
  it("has crm module", function() {
    var mod = angular.module('app');
    expect(mod).not.toBe(undefined);
  });
});
