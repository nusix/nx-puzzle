/*
    TODO:
    1 - validation name ng pattern (numbers, letters, spaces, max 40 chars)
    2 - progress bars
    3 - error messages zdruzene
    4 - countdown - aby sa nezacalo hned hrat ako potvrdi
    5 - nejako lepsie pouzit timeout

    xy - pozriet, ako ozaj sa ma kodit callbacky a tak

*/

export default class HomeController {
    constructor(ScoreService, WordsService, $timeout) {
        'ngInject';

        // this.userName = null;
        this.userName = 'asd';
        this.listOfWords = [];
        this.view = ['name-form','confirm-game','game','results'];
        this.actualView = this.view[2];  //1-insert-name, 2-confirm game and rules 3-game 4-results

        this.counter = 0;
        this.timer;
        // this.limit  = 40;
        this.limit = 3;

        this.userWord = null;

        var self = this;

        /*-----START TIMING------*/
        var stopCounter = function() {
            $timeout.cancel(self.timer);
            self.timer = null;

            //TODO co sa stane
        };

        var startCounter = function() {
            if (self.timer === null) {
                updateCounter();
            }
        };

        var updateCounter = function() {
            if(self.counter < (self.limit-1)){
                self.counter++;
                self.timer = $timeout(updateCounter, 1000);
                console.info('XXX volalo sa updateCounter cas', self.counter);
            }else{
                stopCounter();
                console.info('XXX koniecvolalo sa updateCounter cas', self.counter);
            }
        };
        /*-----END TIMING------*/

        /*-----START INIT APP------*/
        this.init(WordsService);
        updateCounter();
        /*-----END INIT------*/
    };

    resetGame(){
        this.userName = null;
        this.counter = 0;
        this.timer = null;
        this.listOfWords.testingData = [];
        //TODO nacitat novy nahodny zoznam pismen
    };

    setView(view){
        this.actualView = view;
    };

    cancelTheGame(){
        this.resetGame();
        this.setView(this.view[0]);
    };

    confirmTheGame(){
        this.setView(this.view[2]);
        // this.updateCounter(this.timeout);
    };

    init(WordsService){
        var self = this;

        WordsService.initListOfWords(function(list){
            self.listOfWords = list;
            self.listOfWords.getRandomList();
            console.log('HomeController -> init : The list of words were loaded successfuly. listOfWords:', self.listOfWords);
        }, function(){

        });
    }

    startTheGame(){
        this.setView(this.view[1]);
        console.log('HomeController -> startTheGame : The game was started');
    };
}