'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:NavctrlCtrl
 * @description
 * # NavctrlCtrl
 * Controller of the angNewsApp
 */
app.controller('NavCtrl', function ($scope, $location, Post, Auth) {
  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function (postId) {
      $scope.post = {url: 'http://', title: ''};
      $location.path('/posts/' + postId);
    });
  };
  $scope.logout = function () {
    Auth.logout();
  };
});
