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
        };

        this.startCounter = function() {
            self.counter = 0;
            if (self.timer === null) {
                updateCounter();
            }
        };

        var updateCounter = function() {
            if(self.counter < (self.limit-1)){
                self.counter++;
                self.timer = $timeout(updateCounter, 1000);
            }else{
                self.stopCounter();
                self.actualView = self.view[3];
                scoreService.addScore(self.scores, self.userName, self.totalPoints);
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
            self.currentPointsOrigin = Math.floor(Math.pow(1.95,(self.listOfWords.testingData[self.wordOrder].value.length/3)));

            scoreService.getScoresFromBackend(function(res){
                self.scores = res.data;
            }, function(res){
                //todo error cbk
            });

            console.log('HomeController -> init : The list of words were loaded successfuly. listOfWords:', self.listOfWords);
        }, function(){

        });
    };

    //check
    checkWord(oldValue){
        var self = this,
            applyFault = function(){
                self.currentPoints = self.currentPoints !== 0 ? self.currentPoints - 1 : 0;
        };

        //checking retyping
        if(((oldValue.length === this.userWord.length) && (self.$filter('uppercase')(oldValue) !== self.$filter('uppercase')(this.userWord))) ||
            (oldValue.length > this.userWord.length)){
            applyFault();
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
        this.currentPointsOrigin = Math.floor(Math.pow(1.95,(this.listOfWords.testingData[this.wordOrder].value.length/3)));
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
        this.totalPoints = 0;

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