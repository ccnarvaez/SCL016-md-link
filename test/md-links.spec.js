
const { mdLinks } = require('../mdLinks.js');
const { message } = require('../index.js');
require('node-fetch'); 
jest.mock('node-fetch'); 


describe('mdLinks', () => {
  it('should be a function', (path, options) => {
    expect(typeof mdLinks).toBe('function');
  });
});

describe('message', () => {
  const temp = 200;
  it('should be a function', (temp) => {
    expect(typeof message).toBe('function');
  });
});

// describe('linesArray', () => {
//   it('should be an array', () => {
//     expect(typeof linesArray).toBe('array');
//   });
// });

// describe('response', () => {
//   it('should be an object', () => {
//     expect(typeof response).toBe('object');
//   });
// });
