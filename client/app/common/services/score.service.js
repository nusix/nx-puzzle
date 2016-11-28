export default class ScoreService {
    constructor($http) {
        this.$http = $http;
        this.auth = 'K4OGxRo7BRwVduiz8KBijyZsmshvXI0WXOQFzWzS';
    };

    getScoreObj(name, points, scores){
        class Score{
            constructor(name, points) {
                this.id = scores && scores.length ? scores.length : null;
                this.name = name ? name : null;
                this.score = points ? points : null;
                this.timestamp = (Math.floor(Date.now() / 1000)).toString();
            };
        };

        return new Score(name, points);
    };

    //call http request for getting words from backend
    getScoresFromBackend(successCbk, errorCbk){
        
        var url = 'https://nx-puzzle.firebaseio.com/scores.json?auth=' + this.auth;

        this.$http.get(url).then(function(res){

            console.log('ScoreService -≥ getScoresFromBackend : Scores were loaded successfully. Response:',res);

            successCbk(res);  

        }, function (res) {
            console.error('ScoreService -≥ getScoresFromBackend : There was an error during loading scores. Response:', res);

            errorCbk(res);  
        });
    }

    addScore(scores, name, points){
        var url = 'https://nx-puzzle.firebaseio.com/scores.json?auth=' + this.auth,
            scores = scores;

        if(name && points){
            scores.push(this.getScoreObj(name, points, scores));

            // console.log('ScoreService -≥ addScore : params: ', scores, name, points);


            this.$http.put(url, scores).then(function(res){

                console.log('ScoreService -≥ addScore : Score was saved successfully. Response:',res);

                // successCbk(res);  

            }, function (res) {
                console.error('ScoreService -≥ addScore : There was an error during saving score. Response:', res);

                // errorCbk(res);  
            });
        }
    }

}

ScoreService.$inject = ['$http'];