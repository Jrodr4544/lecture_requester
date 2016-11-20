(function () {

  'use strict';

  function LectureRequestsService($scope, user) {

    function all() {
        return $http.get('/lecture_requests/index.json',{}).success(function(data) {});
    }

    function all() {
        return $http.get('/lecture_requests/index.json',{}).success(function(data) {});
    }

    function find() {
        return $http.get('/lecture_requests/index.json',{}).success(function(data) {});
    }

    // They can be called like this:

    // LectureRequestsService.httpShowAll().then(function(data) {
    //     vm.all() = data;
    // });
    
    // LectureRequestsService.resourceShowAll().index().$promise.then(function(success) {
    //     vm.allResources = success;
    // });
  }

  angular
    .module('lecture_requester')  
    .service('LectureRequestsService', LectureRequestsService)

}())
