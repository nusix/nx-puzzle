import HomeController from './home.controller';
import route from './home.route';
import ScoreService from '../../shared/services/score.service';
import WordsService from '../../shared/services/words.service';
import ngRoute from 'angular-route';
import ngFocusIf from 'ng-focus-if';


export default angular
  .module('app.home', [
    ngRoute,
    'focus-if'
    ])
  .config(route)
  .controller('HomeController', HomeController)
  .service('ScoreService', ScoreService)
  .service('WordsService', WordsService)
  .name;
