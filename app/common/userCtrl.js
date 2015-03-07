(function () {
  "use strict";
  angular.module("dranksta")
  .controller("userCtrl", function (UserService, $scope, $location, $routeParams) {
    var userCtrl = this;

    userCtrl.bars = UserService.getBars();


  });
})();
