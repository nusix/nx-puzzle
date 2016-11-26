export default class ScoresController {
    constructor(scoreService, $timeout, $filter, $scope, NgTableParams) {
        'ngInject';

        this.scores = [];
        this.tableParams = null;
        var self = this;

        scoreService.getScoresFromBackend(function(res){

            self.scores = res.data;

            self.tableParams = new NgTableParams({
              sorting: { timestamp: "desc" } 
            }, {
              dataset: self.scores
            });

        }, function(res){
            //todo error cbk
        });

        $scope.$emit('changedLocation', '/scores');
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