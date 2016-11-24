import homeHtml from './home.controller.html';

export default route;

function route($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/home', {
      template: homeHtml,
      controller: 'HomeController as vm',
    });
}
