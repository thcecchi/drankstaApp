(function () {
	"use strict";
	angular.module('dranksta')
	.directive('googlePlaces', function () {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				location:'='
			},
			template:'<input id="google_places_ac" ng-click="doSearch()" name="google_places_ac" type="text" class="input-block-level"/>',
               link: function($scope, elm, attrs) {
                var autocomplete = new google.maps.places.Autocomplete($("#google_places_ac")[0], {});
                google.maps.event.addListener(autocomplete, "place_changed", function () {
                    var place = autocomplete.getPlace();
                    $scope.location = place.geometry.location.lat() + ',' + place.geometry.location.lng();
                    $scope.$apply();
                });

								// $( "body" ).on( "click", "#google_places_ac", function() {
								// 	$scope.doSearch()
								// });

         	}
		}
	});

})();