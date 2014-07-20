var expect = require('chai').expect
var Watcher = require('../../lib/watcher')

describe('watcher', function() {
  var watcher;
  before(function(done) {
    watcher = new Watcher('test/automocha/truefalse-test.js');
    done()
  });
  
  it('should be able to be instantiated', function(done) {
    expect(typeof watcher).to.eql('object');
    done();
  });

  it('should be runnable', function(done) {
    expect(typeof watcher.run).to.eql('function');
    done();
  });

  it('should place files as ready to watch', function(done) {
    expect(watcher.files).to.not.be.empty;
    done();
  });

  it('should have an unwatch function', function(done) {
    expect(typeof watcher.unwatch).to.eql('function');
    done();
  });

  it('should have watches created and should unwatch', function(done) {
    watcher.run();
    expect(watcher.watches).to.not.be.empty; 
    watcher.unwatch();
    done();
  });
});
