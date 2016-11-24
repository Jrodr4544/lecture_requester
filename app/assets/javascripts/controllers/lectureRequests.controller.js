// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function LectureRequestsController($scope, $http){
    $scope.request = "I am making a request to learn more about rails";
    
    var vm = this;

    // vm.lectureRequest = {
    //   title: '',
    //   content: ''
    // }
    vm.allRequests;

    getRequests()

    function getRequests() {
      // no ssl
      return $http.get('http://localhost:3000/lecture_requests.json')
                  .then(function(data) {
                    debugger
                    console.log(data);
                    vm.allRequests = data.data;
                  })
    }

    vm.create = function() {
      debugger
      vm.lectureRequest.title = '';
    }
  }

  LectureRequestsController.$inject = ['$scope', '$http']

  angular
    .module('lecture_requester')  
    .controller('LectureRequestsController', LectureRequestsController)
}());
