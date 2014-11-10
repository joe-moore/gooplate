/*
 * gooplate
 * https://github.com/joe-moore/gooplate
 *
 * Copyright (c) 2014 Joe Moore
 * Licensed under the MIT license.
 */

(function(){
	'use strict';

	var Gooplate ={};

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


