var config = require('lib/config.json');
var Gooplate = require('lib/gooplate.js');

var test=new Gooplate();

test.generateOutput(config.templateFile,config.outputFile,
  function(err,pass)
  {
    console.log("err:"+err);
    
  }
);