function ContactController () {
  this.viewName = 'contact view';
};

angular
  .module('app')
  .controller('ContactController', ContactController);
