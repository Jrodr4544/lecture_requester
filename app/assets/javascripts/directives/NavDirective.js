// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  angular
    .module('lecture_requester')  
    .directive('navBar', function() {
      return {
        templateUrl: 'home/semantic-navbar.html',
        controller: 'SessionController'
      }
    })
}());

