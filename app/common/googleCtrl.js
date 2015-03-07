(function () {
  "use strict";
  angular.module("dranksta")
    .controller("GoogleCtrl", function (GoogleService, $scope, $location, $routeParams) {
      var google = this;

      google.locationInput = function (newLocation) {
        var locName = newLocation
        console.log(locName)
        GoogleService.getBarInfo(locName)

        // console.log(data)
      }

  });
})();

// GoogleService.getBarInfo(locName).success(function(data){
//   google.allBars = data;
// })
