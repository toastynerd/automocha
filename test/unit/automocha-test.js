var expect = require('chai').expect;
var Automocha = require('../../lib/automocha');

describe('automocha', function() {
  before(function(done) {
    done();
  });

  it('should create a new automocha isntance', function(done) {
    var automocha = new Automocha();
    expect(typeof automocha).to.eql('object');
    done();
  });

  it('should be runnable', function(done) {
    var automocha = new Automocha();
    expect(typeof automocha.run).to.eql('function');
    done();
  });
});
