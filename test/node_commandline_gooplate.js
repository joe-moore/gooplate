var config = require('../lib/config.json');
var Gooplate = require('../lib/gooplate.js');

var test=new Gooplate();

test.generateOutput("../lib/test.html","../lib/output.html",
  function(err,pass)
  {
    console.log("err:"+err);
    
  }
);