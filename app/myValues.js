// values factory
(function(configureFactory) {
  configureFactory('myValues', myFactory);

  myFactory.$inject = [];

  function myFactory() {
    function hero() {
      return "Superhero";
    }
    return {
      hero: hero
    }
  }

})(angular.module('customerAdministration').factory);
