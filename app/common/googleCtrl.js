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

// test markers
////////////////////

      $scope.map = {
        center: {
          latitude: 45,
          longitude: -73
        },
        zoom: 8
      }

      $scope.marker = {
        coords: {
          latitude: 45,
          longitude: -73,
        }
      }

      $scope.markerList = [
        {
          id: 1,
          latitude: 45,
          longitude: -73,
          message: 'marker 1'
        },
        {
          id: 2,
          latitude: 46,
          longitude: -74,
          message: 'marker 2'

        },
        {
          id: 3,
          latitude: 47,
          longitude: -78,
          message: 'marker 3'

        },
        {
          id: 4,
          latitude: 48,
          longitude: -79,
          message: 'marker 4'

        },
        {
          id: 5,
          latitude: 49,
          longitude: -80,
          message: 'marker 5'

        },
      ];

      google.locationInput = function (newLocation) {
        newLocation.name = locName
        GoogleService.getBarInfo(locName).success(function(data){
          google.allBars = data;
        })

        console.log(data)
      }

  });
})();

// GoogleService.getBarInfo(locName).success(function(data){
//   google.allBars = data;
// })
