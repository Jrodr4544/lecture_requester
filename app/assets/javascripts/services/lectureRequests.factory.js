(function () {

  'use strict';

  function LectureRequestsFactory($rootScope,$http) {
    var vm = this;

    // object below can be referenced by other controllers to allow access to methods and array containers
    var LectureRequestsFactory = {};
        LectureRequestsFactory.allRequests    = [];
        LectureRequestsFactory.userRequests   = [];

    // return LectureRequestsFactory; // not needed because the return below is doing it :-)
    
    return {
LectureRequestsFactory: LectureRequestsFactory,
       getUserRequests: getUserRequests,
         removeRequest: removeRequest,
           getRequests: getRequests,
         likedRequests: likedRequests,
            addComment: addComment, 
         createRequest: createRequest,
          heartRequest: heartRequest
    }

    function getRequests() {
      // no ssl
      $http.get('/lecture_requests.json')
                  .then(setRequests);
    }

    function getUserRequests(user) {
      return $http.get('/users/'+user.id+'.json')
                  .then(setUserRequests);
    }

    function heartRequest(data) {
      // This will store the data in hearts for this service which can then be accessed. 
      $http.post('/lecture_requests/'+data.lecture_request_id+'/heart', data).then(function(data){
        // This variable gets the request in allRequests that matches the response and then the user_likes for it gets updated
        var request = LectureRequestsFactory.allRequests.filter(function(request){
                      // finding the request id in .allRequests that matches the ajax response(data) id
                        if (request.id == data.data.id) {return request};
                      })[0];
        request.user_likes = data.data.user_likes;
      })
    }

// function refresh() {
//       LectureRequestsFactory.allRequests = [];
//       getRequests();
//     }

    function addComment(id, data) {
      var req = {
        method: 'POST',
        url: '/lecture_requests/'+id+'/comment',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          id: id,
          comment: data
        }
      }
      // return requests;

      return $http(req)
                .then(function(data){
                  var request = LectureRequestsFactory.allRequests.filter(function(request){
                                  if (request.id == data.data.id) {return request};
                                })[0];
                  request.comments = data.data.comments;
                })
                .catch(handleError)

    }

    function likedRequests(user) {
      var requests = [];
      
      LectureRequestsFactory.allRequests.filter(function(request){
        // going through each request's user_likes to grab the user's liked requests
        var likes = request.user_likes;

        for (var i = 0; i < likes.length; i++) {
          if (likes[i].id == user.id) {requests.push(request)};
        }
      });

      return requests;
    }

    // This function is used to refresh allRequests. After a comment is submitted this should trigger
    function refresh() {
      LectureRequestsFactory.allRequests = [];
      getRequests();
    }

    function createRequest(request) {
      var req = {
        method: 'POST',
        url: '/lecture_requests',
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
      var requests = data.data;
      if (requests.length != LectureRequestsFactory.allRequests.length) {
        for (var i = 0; i < requests.length; i++) {
          requests[i]
          // pushing the response data into allRequests
          LectureRequestsFactory.allRequests.push({id: requests[i].id, content: requests[i].content, title: requests[i].title, comments: requests[i].comments, user_likes: requests[i].user_likes})
        }
        // broadcasting the new requests when any changes get made
        $rootScope.$broadcast('requests:updated', LectureRequestsFactory.allRequests);
      }

    }

    // This is a callback function that stores a response and sets it as the service's userRequests
    function setUserRequests(data) {
      var requests = data.data.lecture_requests;
      // This is resetting the userRequests
      LectureRequestsFactory.userRequests = [];
      if (requests.length != LectureRequestsFactory.userRequests.length) {
      for (var i = 0; i < requests.length; i++) {
          requests[i]
          // pushing the response data into userRequests
          LectureRequestsFactory.userRequests.push({id: requests[i].id, content: requests[i].content, title: requests[i].title, comments: requests[i].comments, user_likes: requests[i].user_likes})
        }
      }
      // broadcasting the new requests when any changes get made
      $rootScope.$broadcast('user_requests:updated', LectureRequestsFactory.userRequests);
    }

    function setLikedRequests(data) {
      return vm.likedRequests = data;
    }

    function removeRequest(data) {
      $http.delete('/lecture_requests/'+data).then(function(response){
        console.log(response.data);
        getUserRequests(response.data);
      });
    }

  }

  angular
    .module('lecture_requester')  
    .factory('LectureRequestsFactory', LectureRequestsFactory)

}())
