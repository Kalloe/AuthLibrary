'use strict';

/**
 * @ngdoc function
 * @name authLibraryApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the authLibraryApp
 */
angular.module('authLibraryApp')
  .controller('RegisterCtrl', function($scope, $rootScope, $http, alert) {
    $scope.submit = function() {

      var url = '/';
      var user = {};

      $http.post(url, user)
        .then(function(res) {
          lert('success', 'Woo!', 'Registration is successful!');
        })
        .catch(function(err) {
          alert('warning', 'Damn!', 'Registration FAILED!!');
        });
    };
  });
