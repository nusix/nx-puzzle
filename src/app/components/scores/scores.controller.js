export default class ScoresController {
    constructor(ScoreService, WordsService, $timeout, $filter, NgTableParams) {
        'ngInject';

        this.scores = [];
        this.tableParams = null;
        var self = this;

        ScoreService.getScoresFromBackend(function(res){

            self.scores = res.data;
            self.tableParams = new NgTableParams({}, { dataset: self.scores});

        }, function(res){
            //todo error cbk
        });
    };

    convertTime(unixTimestamp){
        var date = new Date(unixTimestamp*1000),
            year = date.getFullYear(),
            month = date.getMonth()+1,
            day = date.getDate(),
            hours = date.getHours(),
            minutes = "0" + date.getMinutes(),
            second = "0" + date.getMinutes();

        return hours + ':' + minutes.substr(-2) + ':' + second.substr(-2) + ' ' + day + '.' + month + '. ' + year;
    };
}