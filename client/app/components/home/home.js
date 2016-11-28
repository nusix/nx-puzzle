import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import ngFocusIf from 'ng-focus-if';
import uiMask from 'angular-ui-mask';

import 'angular-svg-round-progressbar';

let homeModule = angular.module('home', [
  uiRouter,
  ngFocusIf,
  uiMask,
  'angular-svg-round-progressbar'
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)
  
.name;

export default homeModule;
