(function(app) {

    app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: "common/views/welcome.html",
          controller: 'InstaCtrl as insta'
        })
        .when('/', {
          templateUrl: "common/views/discover.html",
          controller: 'InstaCtrl as insta'
        })
        .when('/detail', {
          templateUrl: "common/views/detail.html",
          controller: 'GoogleCtrl as google'
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

}(angular.module("dranksta", [
    'ngRoute',
])));
