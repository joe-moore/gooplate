'use strict';

if(typeof require !== 'undefined')
{
  var Gooplate = require('../lib/gooplate.js');
}




this.gooplate_Test = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    test.equal(Gooplate.awesome(), 'awesome', 'should be awesome.');
    test.done();
  },
};
