function PortfolioController () {
  this.viewName = 'portfolio view';
};

angular
  .module('app')
  .controller('PortfolioController', PortfolioController);
