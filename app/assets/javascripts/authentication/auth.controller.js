(function () {

  'use strict';

  function AuthController(Auth,$scope) {
    // might need an auth service
    this.credentials = {
      email: '',
      password: ''
    }

    this.config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };

    this.signIn = function() {
      debugger
      Auth.login(this.credentials, this.config).then(function(user) {
        console.log(user);
        alert('success');
      }, function(error) {
        alert("failed");
      });
    }  

    $scope.$on('devise:login', function(event, currentUser) {
      // after login, a refresh, a new tab
    })

    $scope.$on('devise:new-session', function(event, currentUser) {
      // user logged in by Auth.login
    })
  }

  angular
    .module('lecture_requester')  
    .controller('AuthController', AuthController)

}())
