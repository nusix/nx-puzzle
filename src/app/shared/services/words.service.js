export default class WordsService {
    constructor($http) {
        this.$http = $http;
        this.auth = 'K4OGxRo7BRwVduiz8KBijyZsmshvXI0WXOQFzWzS';
    }

    initListOfWords(succCbk, errorCbk){
        class ListOfWords{
            constructor(){
                this.data = [];
                this.testingData = [];
            }

            getRandomList(){
                var shuffle = function(array) {
                    var currentIndex = array.length, temporaryValue, randomIndex;

                    // While there remain elements to shuffle...
                    while (0 !== currentIndex) {

                        // Pick a remaining element...
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;

                        // And swap it with the current element.
                        temporaryValue = array[currentIndex];
                        array[currentIndex] = array[randomIndex];
                        array[randomIndex] = temporaryValue;
                        array[randomIndex].setMaskedValue();
                    }

                    return array;
                };

                angular.copy(this.data, this.testingData);
                this.testingData = shuffle(this.testingData);

                // console.info(this.data, this.testingData);
            };
        };

        var listOfWords = new ListOfWords(),
            self = this;

        this.getWordsFromBackend(function(res){
            if(res && res.data){
                listOfWords.data = res.data.map(function(el){
                    return self.getWordObj(el);
                });
                
                succCbk(listOfWords);
            };
        }, function(){
            errorCbk();
        });
    };

    getWordObj(data){

        class Word{
            constructor(data){
                this.id = data && data.id !== undefined ? data.id : null;
                this.value = data && data.value ? data.value : null;
                this.maskedValue = null;
            };

            setMaskedValue(){
                var a = this.value.split(""),
                    n = a.length;

                for(var i = n - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = a[i];
                    a[i] = a[j];
                    a[j] = tmp;
                }
                this.maskedValue = a.join("");
            };
        }

        return new Word(data);
    };

    //call http request for getting words from backend
    // // getDataFromBackend(zip, apiKey, successCbk, errorCbk){
    getWordsFromBackend(successCbk, errorCbk){
        
        var url = 'https://nx-puzzle.firebaseio.com/words.json?auth=' + this.auth;

        this.$http.get(url).then(function(res){

            console.log('WordsService -≥ getWordsFromBackend : Words were loaded successfully. Response:',res);

            successCbk(res);  

        }, function (res) {
            console.error('WordsService -≥ getWordsFromBackend : There was an error during loading words. Response:', res);

            errorCbk(res);  
        });
    }

}

WordsService.$inject = ['$http'];