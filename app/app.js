(function(app) {
    
    app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: "common/views/welcome.html",

          controller: 'InstaCtrl as insta',
          controller: 'GoogleCtrl as google'
        })
        .when('/discover', {
          templateUrl: "common/views/discover.html",
          controller: 'GoogleCtrl as google'
        })
        .when('/map', {
          templateUrl:"common/views/map.html",
          controller: "GoogleCtrl as google"
        })
        .when('/detail', {
          templateUrl: "common/views/detail.html",
          controller: 'CommentCtrl as comCtrl'
        })

        .when('/not-found', {
          templateUrl: "common/views/not-found.html"
        })
        .otherwise({
          redirectTo: '/not-found'
        });
    });

    app.run(function () {});
    
    app.controller('AppController', function ($scope) {


    });

    app.controller('AppController', function ($scope) {

    });

}(angular.module("dranksta", [
      'ngRoute',
      'comment',
      'ngAutocomplete',
      'uiGmapgoogle-maps'
    
])));

