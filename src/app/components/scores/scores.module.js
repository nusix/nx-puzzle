import ScoresController from './scores.controller';
import route from './scores.route';
import ScoreService from '../../shared/services/score.service';
import WordsService from '../../shared/services/words.service';
import ngRoute from 'angular-route';


export default angular
  .module('app.scores', [
    ngRoute
    ])
  .config(route)
  .controller('ScoresController', ScoresController)
  .service('ScoreService', ScoreService)
  .service('WordsService', WordsService)
  .name;
