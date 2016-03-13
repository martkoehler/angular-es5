// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],

    files: [
      './node_modules/angular/angular.js',
      './app/customerAdministration.module.js',
      './app/crm.module.js',
      './app/confirm.js',
      './app/customerService.js',
      './app/customerController.js',
      './app/myValues.js',
      './specs/*.js'
    ]
  });
};
