(function () {

  'use strict';

  function AuthController(Auth,$scope,$location) {
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
      // debugger
      Auth.login(this.credentials, this.config).then(function(user) {
        // Successfully redirects. Since route has otherwise - it sends to '/' path
        $location.path('/user');
      }, function(error) {
        alert("failed");
      });
    }  

  }

  angular
    .module('lecture_requester')  
    .controller('AuthController', AuthController)

}())
