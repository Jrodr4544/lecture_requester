function lectureRequestFilter() {
  return function (items, lectureRequest) {
    debugger
    return items.filter(function (item) {
      debugger
      // this filter is not in use yet
      return item.location. === lectureRequest;
    })
  };  
}

angular
  .module('app')
  .filter('lectureRequestFilter', lectureRequestFilter);
