'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the angNewsApp
 */
app.controller('ProfileCtrl', function ($scope, $routeParams, Post, User) {
  var user = User.$findByUsername($routeParams.username);
});
