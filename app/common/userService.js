(function () {
  'use strict';

  angular.module('dranksta')
    .factory('UserService', function () {

        var bars = [
          {
            name: "Rec Room",
            photo: "http://www.charlestoncitypaper.com/imager/b/magnum/4762470/a813/bostonmag.jpg",
            address: "Somewhere, CHS"

          },

          {
            name: "Rarebit",
            photo: "http://www.charlestoncitypaper.com/imager/b/magnum/4762470/a813/bostonmag.jpg",
            address: "Somewhere, CHS"

          },
          {
            name: "Husk",
            photo: "http://www.charlestoncitypaper.com/imager/b/magnum/4762470/a813/bostonmag.jpg",
            address: "Somewhere, CHS"

          },
        ]

      var getBarNames = function () {
        return bars;
      };



      return {
        getBars:getBarNames,

      }
    });
})();
