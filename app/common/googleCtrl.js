(function () {
  "use strict";
  angular.module("dranksta")
    .controller("GoogleCtrl", function (GoogleService, $scope, $location, $routeParams) {
      var google = this;

      google.locationInput = function (newLocation) {
        newLocation.name = locName
        GoogleService.getBarInfo(locName).success(function(data){
          google.allBars = data;
        })

        console.log(data)
      }


  });
})();
