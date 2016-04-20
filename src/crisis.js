/**
 * @name		crisis.js
 * @uri			https://github.com/mookman288/crisis.js
 * @author		PxO Ink
 * @license		MIT
 * @copyright	2016 PxO Ink. Some Rights Reserved. 
 */

//Use strict mode.
'use strict';

//Instantiate crisis.
var	crisis	=	function(settings) {
	//If the settings object was passed in. 
	if (typeof settings === 'object') {
		//For each setting.
		for (var key in settings) {
			//Skip this iteration if the property is from prototype.
			if (!settings.hasOwnProperty(key)) continue;
			
			//Set the setting.
			this[key]		=	settings[key];
		}
	}
	
	//Build regex.
	this.buildRegex();
	
	//If the system should automatically begin.
	if (this.automatic) this.process();
	
	//If there is a hello world notice.
	if (this.helloworld.length > 0) {
		//Based on availability.
		if (typeof Challah !== 'object') {
			//Log message.
			console.log("%c%s", "color: blue", this.helloworld);
		} else {
			//Log message.
			Challah.log(this.helloworld, "blue");
		}
	}
	
	//Return this.
	return this;
}
