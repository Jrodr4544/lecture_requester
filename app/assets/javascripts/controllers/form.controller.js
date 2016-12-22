// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function FormController($scope, LectureRequestsFactory, $http){
    
    debugger
    var vm = this;

    vm.create = function() {
      debugger
      return LectureRequestsFactory.createRequest($scope.lectureRequest);
          
      // state should go to the user's profile
      $state.go('home.home');
    }

  }

  FormController.$inject = ['$scope', 'LectureRequestsFactory','$http']

  angular
    .module('lecture_requester')  
    .controller('FormController', FormController)
}());
