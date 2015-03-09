(function (){
  "use strict";
  angular.module('comment')
  .factory('CommentService', function($http, $rootScope, $routeParams) {

    var url = 'http://tiy-fee-rest.herokuapp.com/collections/drankstacomms';

    var getReviews = function () {
      console.log("getReviews triggered");
      console.log(url);
      return $http.get(url);
    };
    var getOneReview = function (id) {
      console.log(id);
      console.log(url + '/' + id);
      return $http.get(url + '/' + id);
    };
    var addReview = function (review) {
      console.log(review, "review");
      $http.post(url, review);
    };


  return {
    getComments: getReviews,
    getOneComment: getOneReview,
    addComment: addReview
    };


  });

})();
