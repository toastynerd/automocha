var fs = require('fs');

function Watcher(files, mocha) {
  this.files = files
  this.mocha = mocha;

  //add all of the test files specified by the mocha runner
  this.mocha.files.forEach(function(file) {
    this.files.push(file);
  });
}

Watcher.prototype.run = function() {
  var self = this;
  this.files.forEach(function(file) {
    fs.watch(file, function(event, filename) {
      self.mocha.run();
    });
  });
}

module.exports = Watcher;
