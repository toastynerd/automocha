var fs = require('fs');
var path = require('path');
var mochaRunner = require('./mocha-runner');
var glob = require('glob');
var fork = require('child_process').fork

function Watcher(inputFiles) {
  var self = this;
  this.files = [];
  if (Array.isArray(inputFiles)) {
    inputFiles.forEach(function(file) {self.files.push(path.resolve(file))});
  } else if(typeof inputFiles === 'string'){
    self.files.push(path.resolve(inputFiles));
  }
  this.watches = [];
}

Watcher.prototype.run = function() {
  var self = this;
  this.watches = [];
  var glob_files = glob.sync(process.cwd() + '/test/automocha/**/*-test.js');
  glob_files.forEach(function(file) {self.files.push(file)});
  mochaRunner();

  this.files.forEach(function(file) {
    var watch = fs.watch(file, function() {
      self.reset();
    });
    self.watches.push(watch);
  });
};

Watcher.prototype.unwatch = function() {
  this.watches.forEach(function(watch) {
    watch.close();
  });
  this.watches = [];
};

Watcher.prototype.reset = function() {
  this.unwatch();
  this.run();
};

module.exports = Watcher;
