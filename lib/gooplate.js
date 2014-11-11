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
	var fs;
	var S;
	var request;
	var config;

	if(typeof require !== 'undefined')
	{
		fs = require('fs');
		S = require('string');
		request = require("request");
		config = require('./config.json');

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
			 
			var testURL=config.testURL;

			request({
			    url: testURL
			   
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


	Gooplate.prototype.generateOutput = function(template,callback){
		 
		if(typeof require !== 'undefined')
		{
			this.getJSON(
				function(err,jsonData)
				{
					if (!err ) 
					{
						_.map(jsonData, function(value, key) {       
	        				_.map(value , function(value, key) {

	        					var outputTemp="";

					           	outputTemp="outputTemplate <%title%>";
					 
					          	_.each(value , function(value, key) {
					            	tempKey='<%'+key+'%>';
					            
					            	outputTemp= S(outputTemp).replaceAll(tempKey,value).s; 
					          	});
	        				});//end _.map(value , function(value, key) {
	  					});//_.map(data, function(value, key) {
					}//if (!err ) 
				}//function(err,jsonData)
			);
 		}//end if(typeof require !== 'undefined')

	};//end generateOutput

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


