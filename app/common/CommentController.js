(function () {
  "use strict";
  angular.module("comment")
    .controller("CommentCtrl", function (CommentService, $scope, $http, $location, $routeParams) {
      var comCtrl = this;

      CommentService.getComments().success(function(data){
        comCtrl.comments=data; //declares data as items returned from server
        var totalArr = []
        data.forEach(function(obj) {
          if(obj.name == 'Husk') {
            totalArr.push(obj.rating)
            console.log(totalArr)
          }
          var total = totalArr.reduce(function(a, b) {
            return a + b;
          });

          var avg = total/totalArr.length
          console.log(avg)
        })
      });

      CommentService.getOneComment($routeParams.itemId).success(function(data){
        comCtrl.singleReview = data; //data is result to pull one server object
      });

      comCtrl.getOneReview = function (review) {
        CommentService.getOneComment(review);
        console.log(review.name)
      };

      comCtrl.addReview = function (newReview, barName) {
        newReview.name = barName;
        CommentService.addComment(newReview)
        console.log(newReview);
      };

      comCtrl.updateResults = function(name) {
        CommentService.getResults(name)
      }
    });


})();
