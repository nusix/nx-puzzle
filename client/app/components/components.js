import angular from 'angular';
import Home from './home/home';
import Scores from './scores/scores';

let componentModule = angular.module('app.components', [
  Home,
  Scores
])

.name;

export default componentModule;
