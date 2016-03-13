// main app module with additional configuration
angular.module('crm', ['customerAdministration'])
  .config(function(customerServiceProvider) {
    var customers = [{
      username: 'Mart Köhler',
      email: 'mart.koehler@openknowledge.de'
    }];
    customerServiceProvider.activate(customers);
  });
