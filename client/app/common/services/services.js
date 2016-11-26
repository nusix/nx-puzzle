import angular from 'angular';

import scoreService from './score.service';
import wordsService from './words.service';

export default angular
  .module('app.services', [])
  .service({
    scoreService,
    wordsService
});