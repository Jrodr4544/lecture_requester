(function () {

  'use strict';

  function LectureRequestsFactory($rootScope,$http,$q) {
    var self = this;

    // object below can be referenced by other controllers to allow access to methods and array containers
    var LectureRequestsFactory = {};
        self.allRequests    = [];
        self.userRequests   = [];

    // return LectureRequestsFactory; // not needed because the return below is doing it :-)
    
    return {
      LectureRequestsFactory: LectureRequestsFactory,
               removeRequest: removeRequest,
                 getRequests: getRequests,
               likedRequests: likedRequests,
                  addComment: addComment, 
               createRequest: createRequest,
                heartRequest: heartRequest
    }

    function getRequests(updated = false) {
      var deferred = $q.defer();
      
      // If we already have the requests, we can resolve the promise.
      // but when we delete we pass the true value to updated argument.
      if (self.allRequests.length !== 0 && updated == false) {
        deferred.resolve(self.allRequests); // Resolving from cache
      } else {
        // no ssl
        $http.get('/lecture_requests.json')
          .success(function(data){
            self.allRequests = []; // Resetting allRequests when get request 
                                   // completes to avoid duplicate entries.
            setRequests(data);     // Setting allRequests
            deferred.resolve(self.allRequests); // From server. At this point we have the requests.
          })
          .error(function(response){
            deferred.reject(response);
          });
      }

      return deferred.promise
    }

    function heartRequest(data) {
      // This will store the data in hearts for this service which can then be accessed. 
      $http.post('/lecture_requests/'+data.lecture_request_id+'/heart', data).then(function(data){
      // This variable gets the request in allRequests that matches the response and then the user_likes for it gets updated
        var request = self.allRequests.filter(function(request){
                      // finding the request id in .allRequests that matches the ajax response(data) id
                        if (request.id == data.data.id) {return request};
                      })[0];
        request.user_likes = data.data.user_likes;
      })
    }

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

      return $http(req)
                .then(function(data){
                  var request = self.allRequests.filter(function(request){
                                  if (request.id == data.data.id) {return request};
                                })[0];
                  request.comments = data.data.comments;
                })
                .catch(handleError)

    }

    function likedRequests(user) {
      var requests = [];
      
      self.allRequests.filter(function(request){
        // going through each request's user_likes to grab the user's liked requests
        var likes = request.user_likes;
        debugger
        for (var i = 0; i < likes.length; i++) {
          if (likes[i].id == user.id) {requests.push(request)};
        }
      });

      return requests;
    }

    function createRequest(request, user_id = null) {
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
                .success(function(response){
                  getRequests(true).then(function(){
                    user_id == null ? null : setUserRequests(user_id);
                  });
                })
                .catch(handleError)
    }

    // This is a callback function that stores a response and sets it as the service's allRequests
    function setRequests(data) {
      var requests = data;

      if (requests.length != self.allRequests.length) {
        for (var i = 0; i < requests.length; i++) {
          requests[i]
          // pushing the response data into allRequests
          self.allRequests.push({id: requests[i].id, content: requests[i].content, title: requests[i].title, comments: requests[i].comments, user_likes: requests[i].user_likes, user_id: requests[i].user.id})
        }
      }
    }

    // This function sets the service's userRequests
    function setUserRequests(user_id) {

      self.userRequests = self.allRequests.filter(function(request){
                            // finding the request id in .allRequests that matches the id passed as argument
                            if (request.user_id == user_id) {return request};
                          });
     
      // broadcasting the updated userRequests
      $rootScope.$broadcast('user_requests:updated', self.userRequests);
      return self.userRequests;
    }

    function removeRequest(data) {
      var user;

      $http.delete('/lecture_requests/'+data).then(function(response){
        user = response.data;  
        // getting requests to refresh the allRequests dataset
        // the true value is passed so that it knows it was updated
        // getting the requests after the delete completes.
        getRequests(true).then(function(){
          // updating userRequests after allRequests update.
          setUserRequests(user.id);
        });      
      });
      
    }

    function handleError(response) {
      console.log(response);
    }

  }

  angular
    .module('lecture_requester')  
    .factory('LectureRequestsFactory', LectureRequestsFactory)

}())
