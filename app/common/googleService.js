(function () {
  'use strict';

  angular.module('dranksta')
    .factory('GoogleService', function ($http, $rootScope, $log) {

      var map;
      var service;
      var infowindow;
      var placeArr = []

      var getGoogleInfo = function initialize(locName) {

        var coordinate=(locName).split(',');
        var latlng = new google.maps.LatLng(coordinate[0],coordinate[1]);
        console.log(latlng);

        map = new google.maps.Map(document.getElementById('map'), {
            center: latlng,
            zoom: 15
          });

        var request = {
          location: latlng,
          radius: '500',
          query: 'bar'
        };

        service = new google.maps.places
          .PlacesService(document.getElementById('main').appendChild(document.createElement('div')));
        service.textSearch(request, callback);
      }

      var callback = function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
            placeArr.push(place)
            // createMarker(results[i]);
            console.log(results[i])
          }
        }
      }

      var readArr = function() {
        return placeArr
      }

      var readOneArr = function(index) {
        return placeArr[index]
        console.log(placeArr[index])
      }

      return {
        getBarInfo: getGoogleInfo,
        getAllBarz: readArr,
        getOneBar: readOneArr
      }
    });

})();
