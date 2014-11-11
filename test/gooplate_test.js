'use strict';

var config;
if(typeof require !== 'undefined')
{
  var Gooplate = require('../lib/gooplate.js');
  config = require('../lib/config.json');
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
  'can get JSON': function(test) {
    test.expect(1);
    
    var goo = new Gooplate();
    goo.getJSON(
      function(err,record)
      {
        test.ifError(err);
        test.done();
      }
    );
    
     
  },
  'can generate template': function(test) {
    test.expect(1);
    
    var goo = new Gooplate();
    
    goo.generateOutput(config.templateFile,config.outputFile,
      function(err,pass)
      {
        console.log("err:"+err);
        test.ok(pass,'generate output');
        test.done();
      }
    );
    
     
  },
};
