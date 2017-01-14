function PortfolioService($http, $stateParams){
  var ctrl = this;
  var API = "../pages.json";
  ctrl.getAllPages = function(){
    return $http
      .get(API)
      .then(function(response){
        return response.data;
      }, function(reason){
        console.log(reason)
      });
  };

  ctrl.getPageById = function(id){
    console.log(id + " getpagebyid");
    return ctrl.getAllPages()
      .then(function(response){
        console.log(id + " in getallpages");
        console.log(response);
        return ctrl.getById(response, id)
      })
  };

  ctrl.getById = function (arr, id) {
    console.log("in getbyid function");
    console.log(arr);
    console.log(arr.length);
    console.log(id);
    console.log(arr[2].id);
    for (var d = 0, len = arr.length; d < len; d += 1) {
        if (arr[d].id === id) {
          console.log("match")
            return arr[d];
        }
    }
  };
}

angular
  .module('app')
  .service('PortfolioService', PortfolioService);
