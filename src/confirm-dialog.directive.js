
(function(configureDirective) {
  configureDirective('confirmDialog',confirm);

  function confirm() {
    return {
      restrict: 'E',
      templateUrl: 'confirm-dialog.template.html',
      scope: {
        call: '&',
        title: '@',
        content: '@'
      },
      link: function(scope, element) {
        scope.confirm = function() {
          angular.element.confirm({
            title: scope.title,
            content: scope.content,
            confirmButton: 'Yes',
            cancelButton: 'No',
            confirm: function() {
            scope.$apply(function() {
               scope.call();
            });

            },
            cancel: function() {

            }
          });
        }
      }
    };

  }
})(angular.module('app').directive);
