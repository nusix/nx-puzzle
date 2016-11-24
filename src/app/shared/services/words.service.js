export default class WordsService {
    constructor($http) {
        this.$http = $http;
        this.auth = 'K4OGxRo7BRwVduiz8KBijyZsmshvXI0WXOQFzWzS';
    }

    initListOfWords(succCbk, errorCbk){
        class ListOfWords{
            constructor(){
                this.data = [];
            }
        }

        var listOfWords = new ListOfWords(),
            self = this;

        this.getWordsFromBackend(function(res){
            if(res && res.data){
                self.data = res.data.map(function(el){
                    return self.getWordObj(el);
                });
                
                succCbk(self.data);
            };

            

        }, function(){
            errorCbk();
        });
    };

    getWordObj(data){

        class Word{
            constructor(data){
                this.id = data && data.id ? data.id : null;
                this.value = data && data.value ? data.value : null;
            }
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