'use strict';

// Set the 'NODE_ENV' env var to 'test' so other modules
// can configure themselves according to this
process.env.NODE_ENV = 'test';

// Require deps
const chai = require('chai');
const chaiHttp = require('chai-http');

// Define the assertion syntax to use
const expect = chai.expect;

// Tell chai to use the Http module
chai.use(chaiHttp);

// Require the service to test
const MoviesService = require('../../services/movies.service.js');

// Require mocks
const mockedMoviesList = require('../../data/mockedMoviesList.js');

// Begin a test suite
describe('Movies Service', () => {

  // Define a test block
  describe(`when calling the 'list()' method`, () => {
    // Define a test
    it('should respond with a list of movies', () => {
      const movies = MoviesService.list();
      expect(movies).to.deep.equal(mockedMoviesList);
    });
  });

});
