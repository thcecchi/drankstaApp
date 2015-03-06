(function () {
angular.module('dranksta', [])
            .directive('googlePlaces', function(){
                return {
                    restrict:'E',
                    replace:true,
                    scope: {location:'='},
                    templateUrl: '/views/locDirective.html',
                    link: function($scope, elm, attrs){
                        var autocomplete = new google.maps.places.Autocomplete($("#locName")[0], {});
                        google.maps.event.addListener(autocomplete, 'place_changed', function() {
                            var place = autocomplete.getPlace();
                            $scope.location = place.geometry.location.lat() + ',' + place.geometry.location.lng();
                            $scope.$apply();
                        });
                    }
                }
            });
          })();
