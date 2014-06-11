'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:NavctrlCtrl
 * @description
 * # NavctrlCtrl
 * Controller of the angNewsApp
 */
app.controller('NavctrlCtrl', function ($scope) {
  $scope.post = {url: 'http://', title: ''};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function (ref) {
      $location.path('/posts/' + ref.name());
      $scope.post = {url: 'http://', title: ''};
    });
  };
});
