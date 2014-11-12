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
    goo.getJSON(config.url+"spreadsheet="+config.spreadsheet+"&sheet="+config.sheet,
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
    
    goo.generateOutputFromURL(config.url+"spreadsheet="+config.spreadsheet+"&sheet="+config.sheet, config.templateFile,config.outputFile,
      function(err,pass)
      {
        test.ok(pass,'generate output');
        test.done();
      }
    );
    
     
  },
  'can generate template from spreadsheet and sheet': function(test) {
    test.expect(1);
    
    var goo = new Gooplate();
    
    goo.generateOutputFromID( config.spreadsheet, config.sheet,
      function(err,pass)
      {
        test.ok(pass,'generate output');
        test.done();
      }
    );
    
     
  },
};
