function PortfolioController (PortfolioService) {
  var ctrl = this;
  ctrl.viewName = 'portfolio view';

  ctrl.allPages = [];
  ctrl.getPages = function () {
    PortfolioService
      .getAllPages()
      .then(function(response){
        ctrl.allPages = response;
      })
  };

  this.getPages();
};

angular
  .module('app')
  .controller('PortfolioController', PortfolioController);
