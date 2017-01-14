function PortfolioController (PortfolioService) {
  var ctrl = this;

  ctrl.allPages = [];
  ctrl.getPages = function () {
    PortfolioService
      .getAllPages()
      .then(function(response){
        ctrl.allPages = response;
      })
  };

  ctrl.getPages();
};

angular
  .module('app')
  .controller('PortfolioController', ['PortfolioService', PortfolioController]);
