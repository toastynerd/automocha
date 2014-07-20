var fs = require('fs');
var mochaRunner = require('./mocha-runner');
var glob = require('glob');
var fork = require('child_process').fork

function Watcher(files) {
  this.files = files
}

Watcher.prototype.run = function() {
  var self = this;
  var return_files = glob.sync(process.cwd() + '/test/automocha/**/*-test.js');
  return_files.forEach(function(file) {self.files.push(file)});
  mochaRunner();

  this.files.forEach(function(file) {
    fs.watchFile(file, function() {
      mochaRunner();
    });
  });
};

module.exports = Watcher;
