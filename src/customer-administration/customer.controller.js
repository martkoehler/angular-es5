// customer controller
(function(configureCustomerController) {
  configureCustomerController('customerController', ctrl);

  ctrl.$inject = ['myValues', 'customerService'];

  function ctrl(myValues, customerService) {
    var that = this;

    that.name = myValues.hero();
    refresh();
    that.addUser = function() {
      customerService.addUser(that.username, that.email);
      console.log(customerService);
      clearInput();
      refresh();
    };
    that.removeUser = function(user) {
      customerService.removeUser(user.email);
      refresh();
    };
    function refresh() {
      that.users = customerService.users();
    }

    function clearInput() {
      that.username = "";
      that.email = "";
    }
  }

})(angular.module('customerAdministration').controller);
