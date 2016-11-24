/*
    TODO:
    1 - validation name ng pattern (numbers, letters, spaces, max 40 chars)
    2 - progress bars
    3 - error messages zdruzene

    xy - pozriet, ako ozaj sa ma kodit callbacky a tak

*/

export default class HomeController {
    constructor($scope, $http, $interval, ScoreService, WordsService) {
        'ngInject';

        this.userName = null;
        this.listOfWords = [];

        this.init(WordsService);
    }

    init(WordsService){
        var self = this;

        WordsService.initListOfWords(function(list){
            self.listOfWords = list;
            console.log('HomeController -> init : The list of words were loaded successfuly. listOfWords:', self.listOfWords);
        }, function(){

        });
    }

    startTheGame(){
        console.log('HomeController -> startTheGame : The game was started');
    };
}