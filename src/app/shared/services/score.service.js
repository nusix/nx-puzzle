export default class ScoreService {
    constructor($http) {
        this.$http = $http;
        this.auth = 'K4OGxRo7BRwVduiz8KBijyZsmshvXI0WXOQFzWzS';
    }

    // //call http request for getting data from backend
    // // getDataFromBackend(zip, apiKey, successCbk, errorCbk){
    // getDataFromBackend(successCbk, errorCbk){
        
    //     var url = 'https://nx-puzzle.firebaseio.com/.json?auth=K4OGxRo7BRwVduiz8KBijyZsmshvXI0WXOQFzWzS';

    //     this.$http.get(url).then(function(res){

    //         console.log('LocationService -≥ getLocationTemperatureInfoByZip : Location temperature info was loaded successfully. Response:',res);

    //         successCbk(res);  

    //     }, function (res) {
    //         console.error('LocationService -≥ getLocationTemperatureInfoByZip : There was an error during loading location info by zip. Response:', res);

    //         errorCbk(res);  
    //     });
    // }

}

ScoreService.$inject = ['$http'];