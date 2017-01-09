angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: `
          <div class="jumbotron">
            <div class="container">
              <h1>Hi, I'm Jared</h1>
              <p>I'm a web developer from Richmond, VA.</p>
              <ul class="homelinks">
                <li>
                  <a ui-sref="about">More About Me</a>
                </li>
                <li>
                  <a ui-sref="portfolio">What I'm Working On</a>
                </li>
                <li>
                  <a ui-sref="contact">Get In Touch</a>
                </li>
              </ul>
            </div>
          </div>
        `
      })
      .state('portfolio', {
        url: '/portfolio',
        controller: 'PortfolioController as ctrl',
        template: `
          <div>
            <ul>
              <li ng-repeat="page in ctrl.allPages">
                <p>{{ page.title }}:</p>
                <p>{{ page.description }}</p>
              </li>
            </ul>
          </div>
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
