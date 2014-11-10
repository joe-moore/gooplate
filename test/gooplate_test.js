'use strict';

if(typeof require !== 'undefined')
{
  var Gooplate = require('../lib/gooplate.js');
}




this.gooplate_Test = {
  setUp: function(done) {
    done();
  },
  'can create gooplate instance': function(test) {
    test.expect(1);
    test.doesNotThrow(function(){
      var goo = new Gooplate();
    });
    test.done();
  },
};
