/*
 * gooplate
 * https://github.com/joe-moore/gooplate
 *
 * Copyright (c) 2014 Joe Moore
 * Licensed under the MIT license.
 */

(function(){
	'use strict';

	var goo ={};

	if(typeof require !== 'undefined')
	{
		var fs = require('fs');

		//goo.generate = function(){console.log("generate");};

	}
	else
	{
		//goo.generate == function(){console.log("generate");};
	};

	var Gooplate = function (options){

		options = options || {};

	};

	Gooplate.prototype.getJSON = function(callback){

		if(typeof require !== 'undefined')
		{
			var request = require("request");
			var config = require('./config.json');

			var urlCityLocation=config.urlCityLocation;

			request({
			    url: urlCityLocation
			   
			}, function (error, response, body) {
			 
			    if (!error && response.statusCode === 200) {
					callback && callback(error,body);
			    }
			    else
			    {
			      console.log('Error getting data: ' + error);
			      callback && callback(error,null);
			      return;
			    }
			});

		}

		 

	};

	Gooplate.awesome = function(){
		return 'awesome';
	};

	if(typeof exports !== 'undefined'){
		module.exports = Gooplate;
	}
	else{
		window.Gooplate= Gooplate;
	}

}.call(this));


