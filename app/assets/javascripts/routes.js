// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  angular
    .module('lecture_requester')  
    .config(function( $stateProvider, $urlRouterProvider) {
        var getRequests = function(LectureRequestsFactory) {  
          // debugger
          return LectureRequestsFactory.getRequests();
        };

        $stateProvider
            .state('home', {
              url: '/',
              templateUrl: 'home/index.html',
              controller: 'HomeController as vm'
            })
            .state('home.home', {
              url: 'home',
              templateUrl: 'home/home.html',
              controller: 'LectureRequestsController as vm',
              resolve: {
                          requests: getRequests
                        }
            })
            .state('home.user', {
              url: 'user',
              templateUrl: 'user/profile.html',
              controller: 'UserProfileController as vm'
            })
            .state('home.about', {
              url: 'about',
              templateUrl: 'home/about.html',
              controller: 'HomeController as vm'
            })
            .state('home.login', {
              url: 'login',
              templateUrl: 'authentication/login.html',
              controller: 'AuthController as vm'
            })
            .state('lecture_request', {
              url: '/lecture_request/:id',
              templateUrl: 'lecture_requests/show.html',
              controller: 'LectureRequestsController as request',
              resolve: {
                          request: function ($http, $stateParams) {
                            // http call to get lecture request
                            debugger
                            return $http.get('/lecture_requests/' + $stateParams.id)
                                      .then(function(response) {
                                        debugger
                                        // need to include this as a scope or variable to then add to DOM
                                        return response.data;
                                      })
                          }
                        }
            })
            .state('signup', {
              url: '/signup',
              templateUrl: 'authentication/signup.html',
              controller: 'AuthController as vm'
            })

        $urlRouterProvider.otherwise('login')
    })

}());
