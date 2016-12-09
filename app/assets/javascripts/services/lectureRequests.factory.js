(function () {

  'use strict';

  function LectureRequestsFactory($rootScope,$http) {
    return {
        getRequests: getRequests,
       userRequests: userRequests,
         getRequest: getRequest,
         addComment: addComment,
      createRequest: createRequest,
      updateRequest: updateRequest
    }

    function getRequests() {
      debugger
      // no ssl
      return $http.get('http://localhost:3000/lecture_requests.json')
                  .then(handleResponse)
    }

    function userRequests(user) {
      debugger
      return $http.get('http://localhost:3000/users/'+user.id+'.json')
                  .then(handleResponse)
    }

    function getRequest() {

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
          lecture_request: data
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

    }

    function handleResponse(response){
      console.log(response);
      return response.data;
    }

    function handleError(response) {
      console.log(response);
    }

  }

  angular
    .module('lecture_requester')  
    .factory('LectureRequestsFactory', LectureRequestsFactory)

}())
