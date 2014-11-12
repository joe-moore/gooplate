var config = require('../lib/config.json');
var Gooplate = require('../lib/gooplate.js');

var goo=new Gooplate();

 
goo.generateOutputFromID( "1PcZjEkJA5KoKpllsvm9oBFy6NakyQI7tWyg2gjUvczs", "adapter",
  function(err,pass)
  {
  	if(err)
  	{
  		console.log(err);
  	}
  }
);

 