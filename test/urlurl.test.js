require('mocha-sinon');
var expect = require('chai').expect;

var urlurl = require('..');

describe('urlurl', function() {

  it('works', function() {
    var obj = urlurl.parse('http://bob%3Az:foo@example.com/bar');
    expect(obj).to.have.property('username', 'bob:z');
    expect(obj).to.have.property('password', 'foo');
    expect(obj).to.have.property('auth', 'bob:z:foo');
  });

});
