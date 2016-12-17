(function () {

  'use strict';

  function LectureRequestsFactory($rootScope,$http) {
    var vm = this;

    return {
              users: this.users,
        allRequests: this.allRequests,
           requests: requests,
            request: this.request,
             hearts: this.hearts,
       userRequests: userRequests,
    getUserRequests: getUserRequests,
        getRequests: getRequests,
      likedRequests: likedRequests,
         addComment: addComment,
      createRequest: createRequest,
       heartRequest: heartRequest,
      updateRequest: updateRequest
    }

    function getRequests() {
      debugger
      // no ssl
      $http.get('http://localhost:3000/lecture_requests.json')
                  .then(setRequests);
    }

    // need to rename any views that use the old userRequests to getUserRequests
    function getUserRequests(user) {
      debugger
      return $http.get('http://localhost:3000/users/'+user.id+'.json')
                  .then(handleResponse)
               // .then(setUserRequests)

    }

    function heartRequest(data) {

      $http.post('/lecture_requests/'+$scope.request.id+'/heart', data).success(function(data){
        debugger
        // This will store the data in hearts for this service which can then be accessed. 
        // Maybe all the lecture requests and other details should be here in its $scope.
        vm.hearts = data;
      })
    }

    function likedRequests(user) {
      debugger
      return $http.get('http://localhost:3000/users/'+user.id+'/hearts.json')
                  // .then(handleResponse) if the one below doesn't work, revert back
               .then(setLikedRequests)
    }

    function addComment(id, data) {
      debugger
      var req = {
        method: 'POST',
        url: 'http://localhost:3000/lecture_requests/'+id+'/comment',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          id: id,
          comment: data
        }
      }

      return $http(req)
                .catch(handleError)
    }

    function createRequest(request) {
      debugger
      var req = {
        method: 'POST',
        url: 'http://localhost:3000/lecture_requests',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          lecture_request: request
        }
      }

      return $http(req)
                .catch(handleError)

    }

    function updateRequest() {
      // post the data then assign it to the $scope
    }

    function handleResponse(response){
      console.log(response);
      return response.data;
    }

    function handleError(response) {
      console.log(response);
    }

    // This function can be called from a view to return the service's current requests
    function requests() {
      return vm.allRequests;
    }

    // This is a callback function that stores a response and sets it as the service's allRequests
    function setRequests(data) {
      debugger
      return vm.allRequests = data.data;
    }

    // This is a callback function that stores a response and sets it as the service's userRequests
    function setUserRequests(data) {
      debugger
      // changed from requests to userRequests
      return vm.userRequests = data.lecture_requests;
      // need to define a function that returns just the userRequests
    }

    function setLikedRequests(data) {
      debugger
      return vm.hearts = data;
    }

  }

  angular
    .module('lecture_requester')  
    .factory('LectureRequestsFactory', LectureRequestsFactory)

}())
