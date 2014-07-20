var Watcher = require('./watcher');

function AutoMocha(files) {
  this.watcher = new Watcher(files, this.mochaRunner);
};

AutoMocha.prototype.run = function() {
  this.watcher.run();
};

module.exports = AutoMocha;
