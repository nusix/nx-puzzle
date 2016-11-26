import ScoreService from 'app/shared/services/score.service.js';

let scoreService, $httpBackend, url, errorData, succData;

describe('Service: ScoreService', () => {

    beforeEach(inject(function ($http, $filter, _$httpBackend_) {
        scoreService = new ScoreService($http, $filter);
        $httpBackend = _$httpBackend_;
        url = 'https://nx-puzzle.firebaseio.com/scores.json?auth=K4OGxRo7BRwVduiz8KBijyZsmshvXI0WXOQFzWzS';
        errorData = {errors: {error: [{'error-message': 'dummyError'}]}};
        succData = [{}];
    }));

    //testing init
    it('Initialization of service - checking defined properties and functions', () => {
        expect(scoreService.auth).not.toBe(null);
        expect(scoreService.getScoreObj).toBeDefined();
        expect(scoreService.addScore).toBeDefined();
        expect(scoreService.getScoresFromBackend).toBeDefined();
    });

    //testing getScoreObj function
    it('getScoreObj function - checking empty object return value and object functions', () => {
        var emptyScoreObj = scoreService.getScoreObj(null, null, null);

        expect(emptyScoreObj).toBeDefined();
        expect(emptyScoreObj.id).toBeDefined();
        expect(emptyScoreObj.name).toBeDefined();
        expect(emptyScoreObj.score).toBeDefined();

        expect(emptyScoreObj.id).toEqual(null);
        expect(emptyScoreObj.name).toEqual(null);
        expect(emptyScoreObj.score).toEqual(null);
        expect(emptyScoreObj.timestamp).not.toEqual(null);
    });

    //testing getScoreObj function
    it('getScoreObj function - checking object with data', () => {
        var scoreObj = scoreService.getScoreObj('Sidney', 87, [{},{}]);

        expect(scoreObj.id).toEqual(2);
        expect(scoreObj.name).toEqual('Sidney');
        expect(scoreObj.score).toEqual(87);
        expect(scoreObj.timestamp).not.toEqual(null);
    });

    //testing getScoresFromBackend function
    it('getScoresFromBackend function - checking http request successCbk', () => {
        var test = null;
        
        expect(test).toEqual(null);

        $httpBackend.when('GET', url).respond(200);
        scoreService.getScoresFromBackend(function(){
            test = true;
        }, null);
        $httpBackend.flush();
        expect(test).toEqual(true);
    });

    //testing getScoresFromBackend function
    it('getScoresFromBackend function - checking http request errorCbk', () => {
        var test = null;

        $httpBackend.when('GET', url).respond(404, errorData);
        scoreService.getScoresFromBackend(function(){}, function(){
            test = 3;
        });
        $httpBackend.flush();
        expect(test).toEqual(3);
    });

    //testing addScore function
    it('addScore function - success', () => {
        var scores = [],
            name = 'Malkin',
            points = 71;

        expect(scores.length).toEqual(0);

        $httpBackend.when('PUT', url).respond(200);

        scoreService.addScore(scores, name, points);
        $httpBackend.flush();
        expect(scores.length).toEqual(1);
    });

    //testing addScore function
    it('addScore function - error', () => {
        var scores = [],
            name = 'Malkin',
            points = 71;

        expect(scores.length).toEqual(0);

        $httpBackend.when('PUT', url).respond(404);

        scoreService.addScore(scores, name, points);
        $httpBackend.flush();
        expect(scores.length).toEqual(1);
    });

});