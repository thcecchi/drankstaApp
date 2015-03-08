(function () {
  'use strict';

  angular.module('dranksta')
    .factory('GoogleService', function ($http, $rootScope, $log) {


      // var googleInfo = {
      //   // urlA: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+',
      //   urlA: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=bar&key=AIzaSyD7V33_45D7vdPHFNKEasnNYXvr16P1Li4',
      //
      //   urlB: '&key=AIzaSyD7V33_45D7vdPHFNKEasnNYXvr16P1Li4',
      // }
      //
      // var getGoogleInfo = function (locName) {
      // // return $http.jsonp(googleInfo.urlA + locName + googleInfo.urlB);
      // // return $http.get(googleInfo.urlA);
      // console.log(googleInfo.urlA)
      // };

      var map;
      var service;
      var infowindow;
      var placeArr = []

      var getGoogleInfo = function initialize(locName) {
        var locName = new google.maps.LatLng(-33.8665433,151.1956316);

        map = new google.maps.Map(document.getElementById('map'), {
            center: locName,
            zoom: 15
          });

        var request = {
          location: locName,
          radius: '500',
          query: 'bar'
        };

        service = new google.maps.places
          .PlacesService(document.getElementById('main').appendChild(document.createElement('div')));
        service.textSearch(request, callback);
      }

      // function callback(results, status) {
      //   if (status == google.maps.places.PlacesServiceStatus.OK) {
      //     for (var i = 0; i < results.length; i++) {
      //       var place = results[i];
      //       // createMarker(results[i]);
      //       console.log(results[i])
      //     }
      //   }
      // }

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
      }




      return {
        getBarInfo: getGoogleInfo,
        getAllBarz: readArr,
        getOneBar: readOneArr
      }
    });
})();
