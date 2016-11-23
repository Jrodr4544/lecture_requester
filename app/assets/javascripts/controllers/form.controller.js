// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  function FormController($scope){
    var form = this;
    debugger
    form.title   = '';
    form.content = '';
    form.bio     = '';

    $scope.update     = function() {
      debugger
      UserFactory.updateUser(vm.current_user);
    }

  }

  FormController.$inject = ['$scope']

  angular
    .module('lecture_requester')  
    .controller('FormController', FormController)
}());
