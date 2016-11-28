import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import services from './common/services/services';
import ngTable from 'ng-table';

import 'normalize.css';

require('bootstrap-loader');

var $ = require('jquery');
window.jQuery = $;


angular.module('app', [
    uiRouter,
    Common,
    Components,
    services.name,
    'ngTable'
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
