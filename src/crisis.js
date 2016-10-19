/**
 * @name		crisis.js
 * @uri			https://github.com/mookman288/crisis.js
 * @author		PxO Ink
 * @license		MIT
 * @copyright	2016 PxO Ink. Some Rights Reserved. 
 */

//Instantiate crisis.
crisis	=	function(settings) {
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
	
	//Return this.
	return this;
};
