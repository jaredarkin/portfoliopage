angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../templates/home.html'
      })
      .state('portfolio', {
        url: '/portfolio',
        controller: 'PortfolioController as ctrl',
        templateUrl: '../templates/portfolio.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '../templates/contact.html'
      })
      .state('portfolio_detail', {
        url: '/portfolio/:id',
        controller: 'PageController as ctrl',
        templateUrl: '../templates/pageDetail.html'
      });
    $urlRouterProvider.otherwise('/');
  });
