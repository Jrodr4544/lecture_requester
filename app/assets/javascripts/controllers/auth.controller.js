(function () {

  'use strict';

  function AuthController($http, Auth, $scope, $rootScope, $state) {
    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };
    
    var vm = this;
    vm.avatars     = []
    vm.avatarFiles = []
    
    // Maybe we can resolve these avatars at signup state
    $scope.getAvatars = function() {
      // setting to empty array in case values already in here
      vm.avatars = [];

      $http.get('avatars').then(function(response) { 
        console.log(response); 
        debugger
        vm.avatarFiles = response.data;
        for (var i = 0; i < vm.avatarFiles.length; i++) {
          vm.avatarFiles[i]
          // pushing the avatarFiles data into avatars and grabbing only the name of the avatar
          vm.avatars.push({name: vm.avatarFiles[i].split('-')[0]})
        }

      });      
    }

    $scope.signIn = function() {
      Auth.login($scope.user, config).then(function(user) {
        $scope.user = user
        $rootScope  = user;
        $state.go('home.home');
      }, function(error) {
        alert("failed");
      });
    }  
    
    $scope.register = function() {
      Auth.register($scope.user, config).then(function(user) {
        // tie user to rootscope
        $rootScope  = user;
        $scope.user = user;
        $state.go('home.home');
      }, function(error) {
        alert("failed");
      });
    }

    $scope.logout = function() {
      Auth.logout().then(function(oldUser) {
        alert("Successfully logged out!");
        $state.go('home.home');
      }, function(error) {
        // An error occurred logging out.
      });
    }

  }

  angular
    .module('lecture_requester')  
    .controller('AuthController', AuthController)

}())
