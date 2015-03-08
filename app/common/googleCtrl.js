(function () {
  "use strict";
  angular.module("dranksta")
    .controller("GoogleCtrl", function (GoogleService, $scope, $location, $routeParams) {

      var goog = this;

      goog.allBars = GoogleService.getAllBarz();

      goog.getSingleBar = GoogleService.getOneBar($routeParams.barIndex);

      $scope.location= "";
        $scope.doSearch = function(){
                if($scope.location === ''){
                    alert('Directive did not update the location property in parent controller.');
                } else {
                    console.log($scope.location);
                  var locCoords = parseInt($scope.location)
                  console.log(locCoords);
                    goog.locationInput($scope.location)
                }
            };

      goog.locationInput = function (newLocation) {
        var locName = newLocation
        console.log(locName)
        GoogleService.getBarInfo(locName)
      }

  });


})();
