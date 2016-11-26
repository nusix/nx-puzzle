import angular from 'angular';
import uiRouter from 'angular-ui-router';
import scoresComponent from './scores.component';

let scoresModule = angular.module('scores', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('scores', {
      url: '/scores',
      component: 'scores'
    });
})

.component('scores', scoresComponent)
  
.name;

export default scoresModule;
