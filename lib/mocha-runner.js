var glob = require('glob');
var domain = require('domain');
var Mocha = require('mocha');

module.exports = function(event, filename) {
  //clear the require cache to reload the mocha tests
  Object.keys(require.cache).forEach(function(key) {
    delete require.cache[key];
  });

  var mocha = new Mocha();

  //run all of the test files contained in test/automocha
  var files = glob.sync(process.cwd() + '/test/automocha/**/*-test.js');

  //add all of the files to mocha
  files.forEach(mocha.addFile.bind(mocha));

  mocha.loadFiles();

  var mochaSuite = mocha.suite;
  var mochaOptions = mocha.options;
  var mochaRunner = new Mocha.Runner(mochaSuite);
  var mochaReporter = new mocha._reporter(mochaRunner);

  var runDomain = domain.create();
  runDomain.on('error', mochaRunner.uncaught.bind(mochaRunner));
  runDomain.run(function() {
    mochaRunner.run(function(failureCount) {
      return failureCount;
    });
  });
};
