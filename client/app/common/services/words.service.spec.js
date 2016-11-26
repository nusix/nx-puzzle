// import WordsService from './words.service';

// let wordsService, $httpBackend, url, errorData, succData;

// describe('Service: WordsService', () => {

//     beforeEach(inject(function ($http, $filter, _$httpBackend_) {
//         wordsService = new WordsService($http, $filter);
//         $httpBackend = _$httpBackend_;
//         url = 'https://nx-puzzle.firebaseio.com/words.json?auth=K4OGxRo7BRwVduiz8KBijyZsmshvXI0WXOQFzWzS';
//         errorData = {errors: {error: [{'error-message': 'dummyError'}]}};
//         succData = [{id: 0,value: "dummy"}];
//     }));

//     //testing init
//     it('Initialization of service - checking defined properties and functions', () => {
//         expect(wordsService.auth).not.toBe(null);
//         expect(wordsService.getListOfWordsObject).toBeDefined();
//         expect(wordsService.initListOfWords).toBeDefined();
//         expect(wordsService.getWordObj).toBeDefined();
//         expect(wordsService.getWordsFromBackend).toBeDefined();
//     });

//     //testing getWordObj function
//     it('getWordObj function - checking empty object return value and object functions', () => {
//         var emptyWordObj = wordsService.getWordObj();

//         expect(emptyWordObj).toBeDefined();
//         expect(emptyWordObj.id).toBeDefined();
//         expect(emptyWordObj.value).toBeDefined();
//         expect(emptyWordObj.maskedValue).toBeDefined();
//         expect(emptyWordObj.size).toBeDefined();

//         expect(emptyWordObj.id).toEqual(null);
//         expect(emptyWordObj.value).toEqual(null);
//         expect(emptyWordObj.maskedValue).toEqual(null);
//         expect(emptyWordObj.size).toEqual(null);
//     });

//     it('getWordObj function - checking object with data', () => {
//         var wordObjWithData = wordsService.getWordObj({id:'1', value:'string'});
//         expect(wordObjWithData.id).toEqual('1');
//         expect(wordObjWithData.value).toEqual('string');
//         expect(wordObjWithData.maskedValue).toEqual(null);
//         // expect(wordObjWithData.size).toEqual(140);
//     });

//     it('getWordObj function - word obj -> setMaskedValue()', () => {
//         var wordObjWithData = wordsService.getWordObj({id:'1', value:'string'});
//         wordObjWithData.setMaskedValue();

//         expect(wordObjWithData.value).toEqual('string');
//         expect(wordObjWithData.maskedValue).not.toEqual('string');
//         expect(wordObjWithData.maskedValue.length).toEqual(wordObjWithData.value.length);
//     });

//     it('getWordObj function - word obj -> checkInput()', () => {
//         var wordObjWithData = wordsService.getWordObj({id:'1', value:'string'});

//         expect(wordObjWithData.checkInput('string')).toBe(true);
//         expect(wordObjWithData.checkInput('string ')).toBe(false);
//         expect(wordObjWithData.checkInput(' string')).toBe(false);
//         expect(wordObjWithData.checkInput('strin')).toBe(false);
//         expect(wordObjWithData.checkInput('stringaaa')).toBe(false);
//         expect(wordObjWithData.checkInput('')).toBe(false);
//         expect(wordObjWithData.checkInput(null)).toBe(false);
//     });

//     //testing getListOfWordsObject function
//     it('getListOfWordsObject function - checking return value and object functions', () => {
//         var listOfWordsObject = wordsService.getListOfWordsObject();

//         expect(listOfWordsObject).toBeDefined();
//         expect(listOfWordsObject.data).toBeDefined();
//         expect(listOfWordsObject.testingData).toBeDefined();

//         expect(listOfWordsObject.data).toEqual([]);
//         expect(listOfWordsObject.testingData).toEqual([]);
//     });

//     //testing getListOfWordsObject function
//     it('getListOfWordsObject function - checking getRandomList function of listOfWordsObject', () => {
//         var listOfWordsObject = wordsService.getListOfWordsObject();

//         for(var i=0;i<20;i++){
//             listOfWordsObject.data.push(wordsService.getWordObj({id:i, value:'string'}));
//         };

//         expect(listOfWordsObject.data.length).toEqual(20);
//         expect(listOfWordsObject.testingData).toEqual([]);

//         listOfWordsObject.getRandomList();
//         expect(listOfWordsObject.data.length).toEqual(20);
//         expect(listOfWordsObject.testingData).not.toEqual([]);
//         expect(listOfWordsObject.testingData.length).toEqual(20);

//         var checkOrder = true;
//         for(var i=0;i<20;i++){
//             if(listOfWordsObject.data[i].id !== listOfWordsObject.testingData[i].id){
//                 var checkOrder = false;
//             }
//         };

//         expect(checkOrder).toEqual(false);
//     });

//     //getWordsFromBackend
//     it('getWordsFromBackend function - checking http request succ cbk', () => {
//         var test = null;
        
//         expect(test).toEqual(null);

//         $httpBackend.when('GET', url).respond(200);
//         wordsService.getWordsFromBackend(function(){
//             test = true;
//         }, null);
//         $httpBackend.flush();
//         expect(test).toEqual(true);
//     });

//     it('getWordsFromBackend function - checking http request error cbk', () => {
//          var test = null;

//         $httpBackend.when('GET', url).respond(404, errorData);
//         wordsService.getWordsFromBackend(function(){}, function(){
//             test = 3;
//         });
//         $httpBackend.flush();
//         expect(test).toEqual(3);
//     });

//     //initListOfWords
//     it('initListOfWords function - checking succ cbk', () => {
//         var test = null;
        
//         expect(test).toEqual(null);

//         $httpBackend.when('GET', url).respond(200, succData);
//         wordsService.initListOfWords(function(){
//             test = true;
//         }, null);

//         $httpBackend.flush();
//         expect(test).toEqual(true);
//     });

//     //initListOfWords
//     it('initListOfWords function - checking error cbk', () => {
//         var test = null;
        
//         expect(test).toEqual(null);

//         $httpBackend.when('GET', url).respond(404, errorData);
//         wordsService.initListOfWords(function(){}, function(){
//             test = true;
//         });

//         $httpBackend.flush();
//         expect(test).toEqual(true);
//     });


// });