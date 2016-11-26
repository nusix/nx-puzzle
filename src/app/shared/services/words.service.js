export default class WordsService {
    constructor($http, $filter) {
        this.$http = $http;
        this.$filter = $filter;
        this.auth = 'K4OGxRo7BRwVduiz8KBijyZsmshvXI0WXOQFzWzS';
    };

    getWordObj(data){
        var selfParent = this;

        class Word{
            constructor(data){
                this.id = data && data.id !== undefined ? data.id : null;
                this.value = data && data.value ? data.value : null;
                this.maskedValue = null;
                // this.size = data && data.value ? (this.value.length+1)*15.6 : null;
                this.size = data && data.value ? (this.value.length+1)*20 : null;
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
                // console.info('setMaskedValue : this.value',this.value,a.join("")', a.join(""));
            };

            checkInput(val){
                var result = true,
                    self = this;

                if(val){
                    for(var i = 0;i < val.length; i++){
                        if(selfParent.$filter('uppercase')(self.value[i]) !== selfParent.$filter('uppercase')(val[i])){
                            result = false;
                        }
                    };

                    if(val.length !== self.value.length){
                        result = false;
                    };
                }else{
                    result = false;
                }

                // console.info('XXX result', result);
                return result;
            };
        }

        return new Word(data);
    };

    getListOfWordsObject(){
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
                    }

                    return array;
                };

                angular.copy(this.data, this.testingData);
                this.testingData = shuffle(this.testingData);
                this.testingData.forEach(function(el){
                    el.setMaskedValue();
                });

                // console.info(this.data, this.testingData);
            };
        };

        return new ListOfWords();
    };

    //call http request for getting words from backend
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

    initListOfWords(succCbk, errorCbk){
        

        var listOfWords = this.getListOfWordsObject(),
            self = this;

        this.getWordsFromBackend(function(res){
            if(res && res.data && res.data.length){
                listOfWords.data = res.data.map(function(el){
                    return self.getWordObj(el);
                });
                console.log('WordsService -≥ initListOfWords : XXX',res);
                
                succCbk(listOfWords);
            };
        }, function(){
            errorCbk();
        });
    };
}

WordsService.$inject = ['$http', '$filter'];