/*
    TODO:
    1 - validation name ng pattern (numbers, letters, spaces, max 40 chars)
    2 - progress bars
    3 - error messages zdruzene
    4 - countdown - aby sa nezacalo hned hrat ako potvrdi
    5 - nejako lepsie pouzit timeout
    6 - blok pre hadanie by mohla byt direktiva
    7 - mozno vypis aby videl ako odpovedal

    xy - pozriet, ako ozaj sa ma kodit callbacky a tak

*/

export default class HomeController {
    constructor(ScoreService, WordsService, $timeout, $filter) {
        'ngInject';

        this.$filter = $filter;
        this.userName = null;
        this.listOfWords = [];
        this.view = ['name-form','confirm-game','game','results'];
        this.actualView = this.view[0];  //1-insert-name, 2-confirm game and rules 3-game 4-results

        this.counter = 0;
        this.timer = null;
        // this.limit  = 40;
        this.limit = 20;

        this.userWord = null;
        this.wordOrder = 0;
        this.totalPoints = 0;
        this.currentPoints = 0;
        this.lastUserWordSize = 0
        this.scores = [];

        //TODO aby mohol zrusit slovo za nulu ?
        //TODO ulozenie vysledku

        var self = this;

        /*-----START TIMING------*/
        this.stopCounter = function() {
            $timeout.cancel(self.timer);
            self.timer = null;

            //TODO co sa stane
        };

        this.startCounter = function() {
            if (self.timer === null) {
                updateCounter();
            }
        };

        var updateCounter = function() {
            if(self.counter < (self.limit-1)){
                self.counter++;
                self.timer = $timeout(updateCounter, 1000);
                // console.info('XXX volalo sa updateCounter cas', self.counter);
            }else{
                self.stopCounter();
                self.actualView = self.view[3];
                ScoreService.addScore(self.scores, self.userName, self.totalPoints);
                // console.info('XXX koniecvolalo sa updateCounter cas', self.counter);
            }
        };
        /*-----END TIMING------*/

        /*-----START INIT APP------*/
        this.init(ScoreService, WordsService);
        /*-----END INIT------*/
    };

    //check
    checkWord(oldValue){
        // console.info('XX oldValue:', oldValue,'new:', this.userWord);

        var self = this,
            applyFault = function(){
                self.currentPoints = self.currentPoints !== 0 ? self.currentPoints - 1 : 0;
        };

        //checking retyping
        if(((oldValue.length === this.userWord.length) && (self.$filter('uppercase')(oldValue) !== self.$filter('uppercase')(this.userWord))) ||
            (oldValue.length > this.userWord.length)){
            applyFault();

            console.info('YYY znizujeme / nahradil pismeno nejake');
        };

        if(this.listOfWords.testingData[this.wordOrder].checkInput(this.userWord)){
            self.nextWord();
        }
    };

    nextWord(){
        this.userWord = null;
        this.wordOrder++;
        this.totalPoints += this.currentPoints;
        this.currentPoints = Math.floor(3.95^(this.listOfWords.testingData[this.wordOrder].length/3));
        this.lastUserWordSize = 0;
        console.info('HomeController -> nextWork : Ideme na dalsie slovo');
    };

    resetGame(){
        this.userName = null;
        this.userWord = null;
        this.counter = 0;
        this.timer = null;
        this.listOfWords.testingData = [];
        this.wordOrder = 0;
        //TODO nacitat novy nahodny zoznam pismen
    };

    setView(view){
        this.actualView = view;
    };

    cancelTheGame(){
        this.stopCounter();
        this.resetGame();
        this.setView(this.view[0]);
    };

    confirmTheGame(){
        this.setView(this.view[2]);
        this.startCounter();
        this.listOfWords.getRandomList();
    };

    init(ScoreService, WordsService){
        var self = this;

        WordsService.initListOfWords(function(list){
            self.listOfWords = list;
            self.listOfWords.getRandomList();
            self.currentPoints = Math.floor(3.95^(self.listOfWords.testingData[self.wordOrder].length/3));
            // self.currentPoints = Math.floor(1.95^(self.listOfWords.testingData[self.wordOrder].length/3))

            ScoreService.getScoresFromBackend(function(res){
                self.scores = res.data;
                // ScoreService.addScore(self.scores, self.userName, self.totalPoints);
            }, function(res){
                //todo error cbk
            });

            console.log('HomeController -> init : The list of words were loaded successfuly. listOfWords:', self.listOfWords);
        }, function(){

        });
    }

    startTheGame(){
        this.setView(this.view[1]);
        console.log('HomeController -> startTheGame : The game was started');
    };
}