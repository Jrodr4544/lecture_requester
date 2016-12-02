function lectureRequestFilter() {
  return function (items, lectureRequest) {
    debugger
    return items.filter(function (item) {
      return item.location. === lectureRequest;
    })
  };  
}

angular
  .module('app')
  .filter('lectureRequestFilter', lectureRequestFilter);