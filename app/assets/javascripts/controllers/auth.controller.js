(function () {

  'use strict';

  function AuthController($http, Auth,$scope, $rootScope, $state) {
    // might need an auth service

    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };
    var vm = this;
    vm.avatars     = []
    vm.avatarFiles = []
    
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
          // vm.avatars.push({name: avatarFiles[i].split(/[\s-.]/)[0]+'.'+avatarFiles[i].split(/[\s-.]/)[2] })
        }

      });      
    }


    $scope.signIn = function() {
      debugger
      Auth.login($scope.user, config).then(function(user) {
        debugger
        $scope.user = user
        $rootScope  = user;
        $state.go('home.home');
      }, function(error) {
        alert("failed");
      });
    }  
    
    $scope.register = function() {
      debugger
      // concat .jpg because it is not displayed in page to make view user friendly 
      $scope.user.avatar.image = $scope.user.avatar.image.concat('.jpg');
      Auth.register($scope.user, config).then(function(user) {
        // tie user to rootscope
        debugger
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
