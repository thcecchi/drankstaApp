(function () {
  "use strict";
  angular.module("dranksta")
  .controller("InstaCtrl", function (InstaService, $scope, $location, $routeParams) {
    var insta = this;
    insta.bars = InstaService.getBars();

  });



})();
