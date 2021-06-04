
const { mdLinks, linesArray, path } = require('../mdLinks.js');
require('node-fetch'); 
jest.mock('node-fetch'); 


describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });
});

describe('linesArray', () => {
  it('should be an array', () => {
    expect(typeof linesArray).toBe('array');
  });
});

describe('response', () => {
  it('should be an object', () => {
    expect(typeof response).toBe('object');
  });
});
