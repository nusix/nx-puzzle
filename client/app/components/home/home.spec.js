// // import ScoreService from '../../common/services/score.service';
// // import WordsService from '../../common/services/words.service';
// // import services from '../../common/services/services';
// import HomeModule from './home'

// // let HomeController, wordsService, scoreService, $httpBackend, urlScores, urlWords, errorData, succDataScore, succDataWord, succDataWordMore;
// let HomeController, $httpBackend, urlScores, urlWords, errorData, succDataScore, succDataWord, succDataWordMore;

// describe('Controller: HomeController', () => {
//   let $rootScope, $state, $location, $componentController, $compile;
//     // beforeEach(() => {
//     //     angular.mock.inject(($controller, $rootScope) => {
//     //         HomeController = $controller('HomeController', { $scope: $rootScope.$new() });
//     //     });
//     // });

//     beforeEach(window.module(HomeModule));

//     beforeEach(inject(($injector) => {
//       $rootScope = $injector.get('$rootScope');
//       $componentController = $injector.get('$componentController');
//       $state = $injector.get('$state');
//       $location = $injector.get('$location');
//       $compile = $injector.get('$compile');
//       scoreService = ScoreService;
//     }));

//     // beforeEach(inject(function (ScoreService, WordsService, _$httpBackend_) {
//     beforeEach(inject(function (_$httpBackend_) {
//         $httpBackend = _$httpBackend_;
//         urlScores = 'https://nx-puzzle.firebaseio.com/scores.json?auth=K4OGxRo7BRwVduiz8KBijyZsmshvXI0WXOQFzWzS';
//         urlWords = 'https://nx-puzzle.firebaseio.com/words.json?auth=K4OGxRo7BRwVduiz8KBijyZsmshvXI0WXOQFzWzS';
//         succDataScore = [{id: 0,name: 'Sidney',score: 43,timestamp: "1479943027"}];
//         succDataWord = [{id: 0,value: "dummy"}];
//         succDataWordMore = [{"id":0,"value":"infinity"},{"id":1,"value":"class"},{"id":2,"value":"hockey"},{"id":3,"value":"guitar"},{"id":4,"value":"notebook"},{"id":5,"value":"computer"}];
//     }));

//     // let controller;
//     beforeEach(() => {
//       HomeController = $componentController('home', {
//         $scope: $rootScope.$new()
//       });
//     });

//     // testing init
//     it('Initialization of controller - checking defined properties and functions', () => {
//         // expect(HomeController.userName).toEqual(null);
//         // expect(HomeController.userWord).toEqual(null);
//         // expect(HomeController.wordOrder).toEqual(0);
//         // expect(HomeController.totalPoints).toEqual(0);
//         // expect(HomeController.currentPoints).toEqual(0);
//         // expect(HomeController.scores).toEqual([]);

//         // expect(HomeController.checkWord).toBeDefined();
//         // expect(HomeController.setView).toBeDefined();
//         // expect(HomeController.cancelTheGame).toBeDefined();
//         // expect(HomeController.confirmTheGame).toBeDefined();
//         // expect(HomeController.init).toBeDefined();
//         // expect(HomeController.startTheGame).toBeDefined();
//     });

//     // it('init function - succ cbk ', () => {
//     //     expect(HomeController.listOfWords).toEqual(null);
//     //     expect(HomeController.scores).toEqual([]);

//     //     $httpBackend.when('GET', urlWords).respond(200, succDataWord);
//     //     $httpBackend.when('GET', urlScores).respond(200, succDataScore);
//     //     $httpBackend.flush();

//     //     expect(HomeController.listOfWords).not.toEqual(null);
//     //     expect(HomeController.listOfWords.data).toBeDefined();
//     //     expect(HomeController.listOfWords.testingData).toBeDefined();
//     //     expect(HomeController.listOfWords.testingData.length).not.toEqual(0);
//     //     expect(HomeController.scores).not.toEqual(null);
//     //     expect(HomeController.scores.length).toEqual(1);

//     // });

//     // it('setView function : values', () => {
//     //     expect(HomeController.actualView).toEqual(HomeController.view[0]);
//     //     HomeController.setView(HomeController.view[1]);
//     //     expect(HomeController.actualView).toEqual(HomeController.view[1]);
//     // });

//     // it('startTheGame function : ', () => {
//     //     expect(HomeController.actualView).toEqual(HomeController.view[0]);
//     //     HomeController.startTheGame();
//     //     expect(HomeController.actualView).toEqual(HomeController.view[1]);
//     // });

//     // it('confirmTheGame function : ', () => {
//     //     expect(HomeController.actualView).toEqual(HomeController.view[0]);


//     //     //test if getRanomdList was calles        
//     //     $httpBackend.when('GET', urlWords).respond(200, succDataWordMore);
//     //     $httpBackend.when('GET', urlScores).respond(200, succDataScore);
//     //     $httpBackend.flush();

//     //     expect(HomeController.listOfWords).not.toEqual(null);
//     //     expect(HomeController.listOfWords.data).toBeDefined();
//     //     expect(HomeController.listOfWords.testingData).toBeDefined();
//     //     expect(HomeController.listOfWords.testingData.length).not.toEqual(0);

//     //     var oldTestingData = HomeController.listOfWords.testingData.slice();
        
//     //     HomeController.confirmTheGame();

//     //     expect(HomeController.actualView).toEqual(HomeController.view[2]);
//     //     expect(HomeController.listOfWords.testingData).not.toEqual(oldTestingData);
//     // });

//     // it('cancelTheGame', () => {
//     //     HomeController.userName = 'dummy';
//     //     HomeController.userWord = 'dummy';
//     //     HomeController.counter = 7;
//     //     HomeController.timer = 2;
//     //     HomeController.wordOrder = 2;
//     //     HomeController.listOfWords = {testingData:[{},{}]};
//     //     HomeController.actualView = HomeController.view[2];

//     //     HomeController.cancelTheGame();

//     //     expect(HomeController.userName).toEqual(null);
//     //     expect(HomeController.userWord).toEqual(null);
//     //     expect(HomeController.counter).toEqual(0);
//     //     expect(HomeController.timer).toEqual(null);
//     //     expect(HomeController.wordOrder).toEqual(0);
//     //     expect(HomeController.listOfWords.testingData.length).toEqual(0);
//     //     expect(HomeController.actualView).toEqual(HomeController.view[0]);
//     // });

//     // it('nextWord function - values', () => {
//     //     HomeController.userWord = 'dummy';
//     //     HomeController.listOfWords = {testingData:[{},{}]};
//     //     HomeController.totalPoints = 2;
//     //     HomeController.wordOrder = 0;
//     //     HomeController.currentPoints = 2;

//     //     HomeController.nextWord();
//     //     expect(HomeController.userWord).toEqual(null);
//     //     expect(HomeController.wordOrder).toEqual(1);
//     //     expect(HomeController.totalPoints).toEqual(4);
//     // });

//     // it('checkWord function - conditions', () => {
//     //     var oldValue = 'inff';
//     //     HomeController.userWord = 'infi';

//     //     //test if getRanomdList was calles        
//     //     $httpBackend.when('GET', urlWords).respond(200, succDataWordMore);
//     //     $httpBackend.when('GET', urlScores).respond(200, succDataScore);
//     //     $httpBackend.flush();

//     //     HomeController.currentPoints = 5;
//     //     HomeController.checkWord(oldValue);
//     //     expect(HomeController.currentPoints).toEqual(4);

//     //     var oldValue = 'inff';
//     //     HomeController.userWord = 'inf';
//     //     HomeController.checkWord(oldValue);
//     //     expect(HomeController.currentPoints).toEqual(3);

//     //     //calling next word
//     //     HomeController.userWord = HomeController.listOfWords.testingData[HomeController.wordOrder].value;
//     //     HomeController.checkWord(oldValue);
//     //     expect(HomeController.userWord).toEqual(null);
//     // });

//     // it('startCounter function : value of timer', () => {
//     //     expect(HomeController.counter).toEqual(0);
//     //     expect(HomeController.timer).toEqual(null);

//     //     HomeController.startCounter();
//     //     expect(HomeController.counter).not.toEqual(0);
//     //     expect(HomeController.timer).not.toEqual(null);

//     //     HomeController.counter = 40;
//     //     HomeController.timer = null;
//     //     HomeController.startCounter();
//     //     expect(HomeController.counter).not.toEqual(0);
//     //     expect(HomeController.timer).toEqual(null);

//     // });


// });

// // import HomeModule from './home'

// // describe('Home', () => {
// //   let $rootScope, $state, $location, $componentController, $compile;

// //   beforeEach(window.module(HomeModule));

// //   beforeEach(inject(($injector) => {
// //     $rootScope = $injector.get('$rootScope');
// //     $componentController = $injector.get('$componentController');
// //     $state = $injector.get('$state');
// //     $location = $injector.get('$location');
// //     $compile = $injector.get('$compile');
// //   }));

// //   describe('Module', () => {
// //     // top-level specs: i.e., routes, injection, naming
// //     it('default component should be home', () => {
// //       $location.url('/');
// //       $rootScope.$digest();
// //       expect($state.current.component).to.eq('home');
// //     });
// //   });

// //   describe('Controller', () => {
// //     // controller specs
// //     let controller;
// //     beforeEach(() => {
// //       controller = $componentController('home', {
// //         $scope: $rootScope.$new()
// //       });
// //     });

// //     it('has a name property', () => { // erase if removing this.name from the controller
// //       expect(controller).to.have.property('name');
// //     });
// //   });

// //   describe('View', () => {
// //     // view layer specs.
// //     let scope, template;

// //     beforeEach(() => {
// //       scope = $rootScope.$new();
// //       template = $compile('<home></home>')(scope);
// //       scope.$apply();
// //     });

// //     it('has name in template', () => {
// //       expect(template.find('h1').html()).to.eq('Found in home.html');
// //     });

// //   });
// // });
