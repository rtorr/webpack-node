var addOne = require('src/index');
var assert = require('assert');
describe('add one', function() {
  it('should return the number you passed in and add 1 to it', function () {
    assert.equal(2, addOne(1));
  });
});
