angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeController as ctrl',
        template: `
          <p>{{ ctrl.viewName }}</p>
        `
      })
      .state('portfolio', {
        url: '/portfolio',
        controller: 'PortfolioController as ctrl',
        template: `
          <p>{{ ctrl.viewName }}</p>
        `
      })
      .state('contact', {
        url: '/contact',
        controller: 'ContactController as ctrl',
        template: `
          <p>{{ ctrl.viewName }}</p>
        `
      });
      $urlRouterProvider.otherwise('/');
  });
