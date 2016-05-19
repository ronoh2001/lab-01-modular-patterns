'use strict';

function greet(name){
  const blank = name || 'Ron Oh';
  return 'hello ' + blank;
}
greet();

exports.greet = greet;
