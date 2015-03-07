(function () {
  "use strict";
  angular.module("comment")
    .controller("CommentCtrl", function (CommentService, $scope, $http, $location, $routeParams) {
      var comCtrl = this;

      CommentService.getComments().success(function(data){
        comCtrl.comments=data; //declares data as items returned from server

      });
      CommentService.getOneComment($routeParams.itemId).success(function(data){
        comCtrl.singleReview = data; //data is result to pull one server object
      });

      comCtrl.getOneReview = function (review) {
        CommentService.getOneComment(review);
      };

      comCtrl.addReview = function (newReview) {
        CommentService.addComment(newReview)
        console.log(newReview);
        $location.path('/detail');

      };
    });


})();
