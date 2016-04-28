'use strict';

function cmd() {
  const input = process.argv[2] || 'Ron Oh';
  console.log(input);
  return 'hello ' + input;
}

function greet(name){
  const blank = name || 'Ron Oh';
  return 'hello ' + blank;
}
cmd();

exports.cmd = cmd;
exports.greet = greet;
