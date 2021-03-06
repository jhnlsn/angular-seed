'use strict';

/* Controllers */

var myApp = angular.module('myApp.controllers', []);

var loginController = function($scope, $timeout) {
  $scope.submitted = false;

  $scope.closeAlert = function closeAlert() {
    $scope.submitted = false;
  }

  $scope.login = function login(user) {
    $scope.submitted = true;
    user.timestamp = Date.now();
    $scope.tracking.img = "/img/tracker.gif?" + $.param(user);
    $timeout(function(){
      $scope.closeAlert();
    }, 3000);
  }

  $scope.tracking = {img:""};
}

var marvelController = function($scope, $http) {
  $http.get('http://jhnlsn.com:3000/marvel').success(function(data){
    $scope.marvel = data.names;
    console.log($scope.marvel);
  });
}

myApp.controller('marvelCtrl', marvelController);
myApp.controller('loginCtrl', loginController);
myApp.controller('MyCtrl1', [function(){}]);
myApp.controller('MyCtrl2', [function(){}]);