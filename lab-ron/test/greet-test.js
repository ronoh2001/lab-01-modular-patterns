'use strict';

const greet = require(__dirname + '/../index.js');
const assert = require('assert');

describe('testing module lab-ron/greet.js', function(){
  describe('testing function greet()', function(){
    it('should return hello + Ron Oh', function(){
      assert.equal(greet('Ron Oh'), 'hello Ron Oh');

    });
  });
});
