var Watcher = require('./watcher');
var MochaRunner = require('./mocha-runner');

function AutoMocha(files) {
  this.mochaRunner = new MochaRunner(files); 
  this.watcher = new Watcher(files, this.mochaRunner);
}

AutoMocha.prototype.run = function() {
  this.mochaRunner.run();
  this.watcher.run();
}

module.exports = AutoMocha;
