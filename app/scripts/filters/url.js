'use strict';

/**
 * @ngdoc filter
 * @name angNewsApp.filter:url
 * @function
 * @description
 * # url
 * Filter in the angNewsApp.
 */
app.filter('hostnameFromUrl', function () {
  return function (str) {
    var url = document.createElement('a');
    url.href = str;
    return url.hostname;
  };
});
