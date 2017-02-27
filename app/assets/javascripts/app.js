// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  angular
    .module('lecture_requester', ['ui.router','templates','Devise', 'asset-path'])  
    .config(['$httpProvider', function($httpProvider) {
          // for CSRF errors
          $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
      }])
}());
