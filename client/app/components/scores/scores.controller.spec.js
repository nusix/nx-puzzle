import ScoresModule from './scores'
import ScoreService from '../../common/services/score.service';
import scoresController from './scores.controller';

let ScoresController, scoreService, $httpBackend, url, errorData, succData, ngTableParams;

describe('Scores', () => {
    let $rootScope, $state, $location, $componentController, $compile, $scope;

    beforeEach(window.module(ScoresModule));

    function MyNgTableParamsMock() {

    }; 

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        $componentController = $injector.get('$componentController');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $compile = $injector.get('$compile');
    }));

    beforeEach(inject(function ($http, $filter, _$httpBackend_) {
        ngTableParams = MyNgTableParamsMock  
        scoreService = new ScoreService($http);
        ScoresController = new scoresController(scoreService, $scope, ngTableParams);

        $httpBackend = _$httpBackend_;
        url = 'https://nx-puzzle.firebaseio.com/scores.json?auth=K4OGxRo7BRwVduiz8KBijyZsmshvXI0WXOQFzWzS';
        succData = [{id: 0,name: 'Sidney',score: 43,timestamp: "1479943027"}];
    }));

    //testing init
    it('Initialization of controller - checking defined properties and functions', () => {
        expect(ScoresController.scores).not.toBe(null);
        expect(ScoresController.scores).toEqual([]);
        expect(ScoresController.tableParams).toBe(null);

        expect(ScoresController.convertTime).toBeDefined();

        var test = null;

        expect(test).toEqual(null);

        $httpBackend.when('GET', url).respond(200, succData);
        $httpBackend.flush();

        expect(ScoresController.scores.length).toEqual(1);
        expect(ScoresController.scores[0].id).toEqual(0);
        expect(ScoresController.scores[0].name).toEqual('Sidney');
        expect(ScoresController.tableParams).not.toBe(null);
    });

    //convertTime
    it('convertTime function - get right date and time', () =>{
        expect(ScoresController.convertTime('1479943027')).toBe('0:17:17 24.11. 2016');
    });

});
