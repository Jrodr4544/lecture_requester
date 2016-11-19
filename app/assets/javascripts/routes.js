// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  angular
    .module('lecture_requester')  
    .config(function($stateProvider, $urlRouterProvider) {
        
        // $httpProvider.defaults.withCredentials = true;

        $stateProvider
            .state('home', {
              url: '/',
              templateUrl: 'home/home.html',
              controller: 'HomeController as vm'
            })
            // nested route below at home.lecture_requests
            .state('home.user', {
              url: '/user',
              templateUrl: 'user/profile.html',
              controller: 'UserProfileController as vm'
            })
            .state('home.about', {
              url: '/about',
              templateUrl: 'user/profile.html',
              // will i need an about page controller?
              controller: 'HomeController as vm'
            })
            .state('home.login', {
              url: '/login',
              templateUrl: 'authentication/login.html',
              controller: 'AuthController as vm'
            })

        $urlRouterProvider.otherwise('/')
    })

}());
