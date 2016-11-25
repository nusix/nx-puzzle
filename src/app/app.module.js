import angular from "angular";

import appHome from 'app/components/home/home.module';
import appScores from 'app/components/scores/scores.module';

export default angular
  .module('app', [
    appHome,
    appScores
  ])
  .name;
