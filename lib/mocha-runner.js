var Mocha = require('mocha');
var glob = require('glob');

function MochaRunner() {
  this.mochaInstance = new Mocha();

  //run all of the test files contained in test/automocha
  this.files = glob.sync('./test/automocha/**/*-test.js');
  var self = this;

  //add all of the files to mocha
  this.files.forEach(function(file) {
    self.mochaInstance.addFile(file);
  });
};

MochaRunner.prototype.run = function() {
  this.mochaInstance.run(function() {
    return false;
  });
};

module.exports = MochaRunner;
