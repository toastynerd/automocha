var expect = require('chai').expect;

describe('mocha-runner', function() {
  var mocha;
  before(function(done) {
    mocha = require('../../lib/mocha-runner');
    done();
  });

  it('it should exist', function(done) {
    expect(typeof mocha).to.eql('function');
    done();
  });
});
