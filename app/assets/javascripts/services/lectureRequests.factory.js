(function () {

  'use strict';

  function LectureRequestsFactory($http) {
    return {
        getRequests: getRequests,
         getRequest: getRequest,
      createRequest: createRequest,
      updateRequest: updateRequest
    }

    function getRequests() {
      debugger
      // no ssl
      return $http.get('http://localhost:3000/lecture_requests.json')
                  .then(handleResponse)
    }

    function getRequest() {

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
