'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PostViewCtrl
 * @description
 * # PostViewCtrl
 * Controller of the angNewsApp
 */
app.controller('PostViewCtrl', function ($scope, $routeParams, Post) {
    $scope.post = Post.find($routeParams.postId);
});
