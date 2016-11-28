/*
    TODO:
    Must DO:

    5 - validation name ng pattern (numbers, letters, spaces, max 40 chars)
    7 - checknite si tabulku - button aby sa preklikli po hre
    4 - routing troska lepsie - cez states ui routing
    3 - countdown - aby sa nezacalo hned hrat ako potvrdi 3 sekundy alebo co...
    2 - progress bars
    3 - error messages zdruzene

xxxxxx

    1 - aby mohol zrusit slovo za nulu ?
    5 - nejako lepsie pouzit timeout
    6 - blok pre hadanie by mohla byt direktiva
    7 - mozno vypis aby videl ako odpovedal
    9 - v testoch otestovat nie len callbacky ale aj response ako parameter
    xy - pozriet, ako ozaj sa ma kodit callbacky a tak

*/

class HomeController {
    constructor(scoreService, wordsService, $filter, $scope, $timeout) {
        
        'ngInject';

        this.$filter = $filter;
        this.userName = null;
        this.listOfWords = null;
        this.view = ['name-form','confirm-game','game','results'];
        this.actualView = this.view[0];  //1-insert-name, 2-confirm game and rules 3-game 4-results

        this.counter = 0;
        this.timer = null;
        this.limit  = 40;

        this.userWord = null;
        this.wordOrder = 0;
        this.totalPoints = 0;
        this.currentPoints = 0;
        this.scores = [];

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
                scoreService.addScore(self.scores, self.userName, self.totalPoints);
                // console.info('XXX koniecvolalo sa updateCounter cas', self.counter);
            }
        };
        /*-----END TIMING------*/

        /*-----START INIT APP------*/
        this.init(scoreService, wordsService);

        $scope.$emit('changedLocation', '/');
        /*-----END INIT------*/
    };

    init(scoreService, wordsService){
        var self = this;

        wordsService.initListOfWords(function(list){
            self.listOfWords = list;
            self.listOfWords.getRandomList();
            self.currentPoints = Math.floor(Math.pow(1.95,(self.listOfWords.testingData[self.wordOrder].value.length/3)));

            scoreService.getScoresFromBackend(function(res){
                self.scores = res.data;
                // scoreService.addScore(self.scores, self.userName, self.totalPoints);
            }, function(res){
                //todo error cbk
            });

            console.log('HomeController -> init : The list of words were loaded successfuly. listOfWords:', self.listOfWords);
        }, function(){

        });
    };

    //check
    checkWord(oldValue){
        // console.info('XX oldValue:', oldValue,'newValue:', this.userWord);

        var self = this,
            applyFault = function(){
                self.currentPoints = self.currentPoints !== 0 ? self.currentPoints - 1 : 0;
        };

        //checking retyping
        if(((oldValue.length === this.userWord.length) && (self.$filter('uppercase')(oldValue) !== self.$filter('uppercase')(this.userWord))) ||
            (oldValue.length > this.userWord.length)){
            applyFault();

            // console.info('YYY znizujeme / nahradil pismeno nejake');
        };

        if(this.listOfWords.testingData[this.wordOrder].checkInput(this.userWord)){
            self.nextWord();
        }
    };

    nextWord(){
        this.userWord = null;
        this.wordOrder++;
        this.totalPoints += this.currentPoints;
        this.currentPoints = Math.floor(Math.pow(1.95,(this.listOfWords.testingData[this.wordOrder].value.length/3)));
    };

    setView(view){
        this.actualView = view;
    };

    cancelTheGame(){
        this.userName = null;
        this.userWord = null;
        this.counter = 0;
        this.timer = null;
        this.listOfWords.testingData = [];
        this.wordOrder = 0;

        this.stopCounter();
        this.setView(this.view[0]);
    };

    confirmTheGame(){
        this.setView(this.view[2]);
        this.startCounter();
        this.listOfWords.getRandomList();
    };

    startTheGame(){
        this.setView(this.view[1]);
        console.log('HomeController -> startTheGame : The game was started');
    };
};

export default HomeController;