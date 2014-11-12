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
	var _;

	if(typeof require !== 'undefined')
	{
		fs = require('graceful-fs');
		S = require('string');
		request = require("request");
		_ = require('underscore');
		config =require('./config');

		//goo.generate = function(){console.log("generate");};

	}
	else
	{
		//goo.generate == function(){console.log("generate");};
	};

	var Gooplate = function (options){

		options = options || {};

	};

	Gooplate.prototype.getJSON = function(url,callback){

		if(typeof require !== 'undefined')
		{
			 

			request({
			    url: url
			   
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


	Gooplate.prototype.generateOutputFromURL = function(url,template,outputFile,callback){
		 
		if(typeof require !== 'undefined')
		{

			//read template files
			fs.readFile(template, 'utf8', function (err, data) {

			    if (err) 
			    {
			        callback && callback(err,false);
			        return;
			    }
 
			    var templateFile=data;

			    var gooplateGetJSON = new Gooplate();

				gooplateGetJSON.getJSON(url,
				function(err,jsonData)
				{
					if (!err ) 
					{
						var parsedData =  JSON.parse(jsonData);

						_.map(parsedData, function(value, key) {  
							
							var outputTemp=""; 
							 
							
	        				_.map(value , function(value, key) {
 								outputTemp=templateFile;
 									
	        					var tempKey="";
	        					

	        					Object.keys(value).forEach(function(key) {

							        tempKey='<%'+key+'%>';

					            	outputTemp= S(outputTemp).replaceAll(tempKey,value[key]).s;
							    });
 
					          	fs.appendFile(outputFile, outputTemp, function (err) {
						    	if (err) 
						    	{   
						    		callback && callback(null,false);
						    	} 
							});//end fs.appendFile(outputFile, outputTemp, function (err) {
  
	        				});//end _.map(value , function(value, key) {
	        				
	        				 
	  					
	  					});//_.map(data, function(value, key) {

  						 

	  					callback && callback(null,true);
					}//if (!err ) 
					else
					{
						callback && callback(err,false);
					}

					 
				}//function(err,jsonData)
			);
			});//end fs.readFile(template, 'utf8', function (err, data) {
 		}//end if(typeof require !== 'undefined')

	};//end generateOutput



	Gooplate.prototype.generateOutputFromID = function(spreadsheet,sheet,callback){
		 
		if(typeof require !== 'undefined')
		{

			//read template files
			fs.readFile(config.templateFile, 'utf8', function (err, data) {

			    if (err) 
			    {
			        callback && callback(err,false);
			        return;
			    }
 
			    var templateFile=data;

			    var gooplateGetJSON = new Gooplate();

				gooplateGetJSON.getJSON(config.url+"spreadsheet="+spreadsheet+"&sheet="+sheet,
				function(err,jsonData)
				{
					if (!err ) 
					{
						var parsedData =  JSON.parse(jsonData);

						_.map(parsedData, function(value, key) {  
							
							var outputTemp=""; 
							  
	        				_.map(value , function(value, key) {
 								outputTemp=templateFile;
 									
	        					var tempKey="";
	        					 
	        					Object.keys(value).forEach(function(key) {

							        tempKey='<%'+key+'%>';

					            	outputTemp= S(outputTemp).replaceAll(tempKey,value[key]).s;
							    });
 
					          	fs.appendFile(config.outputFile, outputTemp, function (err) {
						    	if (err) 
						    	{   
						    		callback && callback(null,false);
						    	} 
							});//end fs.appendFile(outputFile, outputTemp, function (err) {
  
	        				});//end _.map(value , function(value, key) {
	        				 
	  					});//_.map(data, function(value, key) {
 
	  					callback && callback(null,true);
					}//if (!err ) 
					else
					{
						callback && callback(err,false);
					}
 
				}//function(err,jsonData)
			);
			});//end fs.readFile(template, 'utf8', function (err, data) {
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


