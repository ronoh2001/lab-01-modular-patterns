'use strict';

const greet = require(__dirname + '/../index.js');
const assert = require('assert');

describe('testing module lab-ron/greet.js', function(){
  describe('testing function greet()', function(){
    it('should return hello + Ron Oh', function(){
      assert.to.equal(greet(), 'hello Ron Oh');
      // process.argv=['node', 'index.js', 'Ron Oh'];
    });
  });
});
