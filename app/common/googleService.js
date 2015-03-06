(function () {
  'use strict';

  angular.module('dranksta')
    .factory('GoogleService', function () {

      googleInfo = {
        urlA: 'maps.googleapis.com/maps/api/place/textsearch/json?query=bars+in+',
        urlB: '&key=AIzaSyD7V33_45D7vdPHFNKEasnNYXvr16P1Li4',
      }

      var getGoogleInfo = function (locName) {
      return $http.get(return $http.get(urlA + locName + urlB);
      };

      return {
        getBarInfo: getGoogleInfo
      }
    });
})();
