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
        .success(function(res) {
          console.log('good');
        })
        .error(function(err) {
          alert('warning', 'Opps!', 'Could not register');
        });
    }
  });
