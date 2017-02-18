// using the iffy (function) loads the code after the dom loads
( function() {
  'use strict';
  
  angular
    .module('lecture_requester')  
    .config(function(function(assetPathProvider) {
    assetPathProvider.setAssets(
      <%= File.read(Dir.glob('public/assets/manifest-*.json').last).html_safe rescue "{}" %>
    )
  })

}());
