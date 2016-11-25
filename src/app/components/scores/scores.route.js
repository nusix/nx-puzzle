import scoresHtml from './scores.controller.html';

export default route;

function route($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/scores', {
      template: scoresHtml,
      controller: 'ScoresController as vm',
    });
}
