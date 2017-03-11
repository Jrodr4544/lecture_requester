// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function FormController($scope, LectureRequestsFactory, $http){
    
    debugger
    var vm = this;

    vm.create = function() {
      debugger
      // clearing the scope so that the form is empty
      document.getElementById("lectureRequestForm").reset();

      return LectureRequestsFactory.createRequest($scope.lectureRequest);
    }

  }

  FormController.$inject = ['$scope', 'LectureRequestsFactory','$http']

  angular
    .module('lecture_requester')  
    .controller('FormController', FormController)
}());