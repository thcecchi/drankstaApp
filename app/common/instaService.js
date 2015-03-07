
(function () {
  'use strict';

  angular.module('dranksta')
    .factory('InstaService', function () {
      // 
      // var igInfo = {
      //       urlA: 'api.instagram.com/v1/tags/',
      //       urlB: '/media/recent?client_id=af685a58c5b14d56bc3398d5d8e356ad',
      // 	    // secret: '52f98117baa64118adbf6a9637376c04'
      //       locationTag:
      //     };

      var getPics = function () {
        return $http.get(urlA + locationTag + urlB);
    };

      return {
        getBarPics: getPics
      }
    });

})();
