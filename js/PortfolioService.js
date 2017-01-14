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
    return ctrl.getAllPages()
      .then(function(response){
        return ctrl.getById(response, id)
      })
  };

  ctrl.getById = function (arr, id) {
    for (var d = 0, len = arr.length; d < len; d += 1) {
        if (arr[d].id == id) {
            return arr[d];
        }
    }
  };
}

angular
  .module('app')
  .service('PortfolioService', PortfolioService);
