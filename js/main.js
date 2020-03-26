var app = angular.module("Artmoney", ['ngAnimate']);
app.controller("Global", function($scope, $rootScope) {


  var rand = (m) => {
    return Math.floor(Math.random() * Math.floor(m));
  }
  $scope.countIT = 0, $scope.countYou = 0, $scope.countEver = 0;

  $scope.put = (e) => {
    var pc = rand(3);

    if (pc > rand(e)) {
      $scope.winner = 'Штучний інтелект';
      $scope.countIT++;
    } else if (pc == rand(e)) {
      $scope.winner = 'Нічия';
      $scope.countEver++;
    } else {
      $scope.winner = 'Ти';
      $scope.countYou++;
    }
  }
})
