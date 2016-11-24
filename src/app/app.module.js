import angular from "angular";

import appHome from 'app/components/home/home.module';

export default angular
  .module('app', [
    appHome
  ])
  .name;
