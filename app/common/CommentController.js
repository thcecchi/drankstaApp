(function () {
  "use strict";
  angular.module("dranksta")
    .controller("CommentCtrl", function (CommentService, $scope, $http, $location, $routeParams) {
      var comCtrl = this;
      var total = ''
      var avg = ''

        comCtrl.mode = function(store) {
          console.log('fired!!')
          var frequency = {};  // array of frequency.
          var max = 0;  // holds the max frequency.
          var result;   // holds the max frequency element.
          for(var v in store) {
            frequency[store[v]]=(frequency[store[v]] || 0)+1; // increment frequency.

            if(frequency[store[v]] > max) { // is this frequency > max so far ?
                max = frequency[store[v]];  // update max.
                result = store[v];          // update result.
            }
          }

          $('.category').append(result)
          console.log(result)
        };


      CommentService.getComments().success(function(data){
        comCtrl.comments=data; //declares data as items returned from server
        console.log(data)
        var totalArr = []
        var catArr = []
        console.log('is this being logged twice?')
      //   $scope.getTheBars.forEach(function(obj) {
      //   console.log(obj.name)
      // })
        data.forEach(function(obj) {
          var barNamez = $('.barName').text()
          console.log(barNamez)
          if(obj.name == barNamez) {
            var num = parseInt(obj.rating)
            totalArr.push(num)
            catArr.push(obj.category)
            console.log(totalArr)
            console.log(catArr)
          }

        })

        console.log(totalArr)
        console.log(totalArr.length)
        var total = totalArr.reduce(function(a, b) {

          return a + b;

        });

        comCtrl.mode(catArr) // fire the find mode function

        console.log(total)
        avg = total/totalArr.length
        console.log(avg)
        var roundedAvg = Math.round(avg)
        $('.rating').append(roundedAvg)
      });

      // CommentService.getOneComment($routeParams.itemId).success(function(data){
      //   comCtrl.singleReview = data; //data is result to pull one server object
      // });

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
