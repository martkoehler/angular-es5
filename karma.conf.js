// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],

    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './src/customer-administration/customer-administration.module.js',
      './src/app.module.js',
      './src/confirm-dialog.directive.js',
      './src/customer-administration/customer.service.js',
      './src/customer-administration/customer.controller.js',
      './src/my-values.js',
      './test/*.spec.js'
    ]
  });
};
