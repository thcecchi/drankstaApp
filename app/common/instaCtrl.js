(function () {
  "use strict";
  angular.module('dranksta')

      .controller('InstaController', ['$scope', 'InstaService',
      function ($scope, InstaService){

        var InstaCtrl = this;
        $scope.layout = 'grid';

        $scope.setLayout = function (layout){
        $scope.layout = layout;
      };

      $scope.isLayout = function (layout){
        return $scope.layout ==layout
      };
      $scope.pics = [];

      InstaService.fetchPopular(function(data){
        $scope.pics = data
      });


    }]);
  })();
