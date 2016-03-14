describe('CustomerController', function() {
  beforeEach(angular.mock.module('app'));

  var $controller;

  beforeEach(angular.mock.inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('controller with real dependencies', function() {
    it('should be defined', function() {
      var controller = $controller('customerController');

      expect(controller).not.toBe(undefined);
    });

    it('should have title', function() {
      var controller = $controller('customerController');

      expect(controller.name).toBe('Superhero');
    })
  });

  describe('controller with mocked dependencies', function() {
    it('should have title from mocked service', function() {

      var mockService = function MyValueMockService() {
        function hero() {
          return "not my hero";
        }
        return {
          hero: hero
        }
      }

      var controller = $controller('customerController', {myValues: new mockService()});

      expect(controller.name).toBe('not my hero');
    })
  });
});
