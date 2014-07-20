var expect = require('chai').expect;

describe('a fail and a pass', function() {
  it('should pass', function(done) {
    expect(true).to.eql(true);
    done();
  });

  it('should fail', function(done) {
    expect(true).to.eql(true);
    done();
  });

  it('probably needs another test', function(done) {
    expect(true).to.eql(true);
    done();
  });
});

