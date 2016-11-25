import ScoresController from './scores.controller';
import route from './scores.route';
import ScoreService from '../../shared/services/score.service';
import WordsService from '../../shared/services/words.service';
import ngRoute from 'angular-route';
import ngTable from 'ng-table';


export default angular
  .module('app.scores', [
    ngRoute,
    'ngTable'
    ])
  .config(route)
  .controller('ScoresController', ScoresController)
  .service('ScoreService', ScoreService)
  .service('WordsService', WordsService)
  .name;
