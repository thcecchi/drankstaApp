(function () {
  'use strict';

  angular.module('dranksta')
    .factory('InstaService', function () {

      var igInfo = {
            urlA: 'api.instagram.com/v1/tags/',
            urlB: '/media/recent?client_id=af685a58c5b14d56bc3398d5d8e356ad',
          }

      var getPics = function () {
        return $http.get(urlA + locName + urlB);
    };

      return {
        getBarPics: getPics
      }
    });

})();
