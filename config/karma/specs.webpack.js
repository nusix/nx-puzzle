/**
 * This file is an entry point for angular tests.
 * Avoids some weird issues when using webpack + angular.
 * */

// FIXME: Possibility to write it in ES6 (should add it to the transpiler webpack probably.

require('angular-mocks/angular-mocks');


// Here you can put your init stuff...
beforeEach(angular.mock.module('app'));

const testsContext = require.context('../../src/', true, /.spec$/);

//FOT TESTING Purposes just specific file
// const testsContext = require.context('../../src/app/components/home', true, /.spec$/);
// const testsContext = require.context('../../src/app/shared/services', true, /score.service.spec$/);
testsContext.keys().forEach(testsContext);