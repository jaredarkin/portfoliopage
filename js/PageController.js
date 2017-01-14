function PageController (PortfolioService, $stateParams) {
  var ctrl = this;
  ctrl.page = {};

  ctrl.getPage = function () {
    PortfolioService
      .getPageById($stateParams.id)
      .then(function(response) {
        ctrl.page = response;
      });
  };

  ctrl.getPage();

};

angular
  .module('app')
  .controller('PageController', ['PortfolioService', '$stateParams', PageController]);
