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
	
	//Return this.
	return this;
}

//Automatically add a handler to watch all specified inputs. 
crisis.prototype.automatic	=	true;

//Which inputs should be watched. 
crisis.prototype.inputs		=	['input[type=text]', 'search', 'textarea'];

//Which strings should be searched for. 
crisis.prototype.search		=	{
		'suicide':	{
			'combinations':	[
				{
					'primary': ['kill', 'hurt', 'cut'],
					'secondary': ['myself', 'herself', 'himself']
				},
				{
					'primary': ['commit'],
					'secondary': ['suicide']
				}, 
				{
					'primary': ['end it'], 
					'secondary': ['all', 'now']
				}
			], 
			'strings':		['want to die']
		}, 
		'ipv': {
			'combinations':	[
 				{
					'primary': ['hit', 'beat', 'cut', 'abus', 'stalk', 'hurt'],
					'secondary': ['me', 'her', 'him']
				}, 
				{
					'primary': ['am', "i'm", 'is', "he's", "she's", 'are', "they're"], 
					'secondary': ['scared', 'afraid', 'terrified']
				}, 
				{
					'primary': ['been', 'be', 'is'], 
					'secondary': ['beat', 'cut', 'abus', 'stalk', 'hurt']
				}
			]
		}, 
		'sar': {
			'combinations':	[
  				{
 					'primary': ['rap', 'touch', 'grop', 'fondl'],
 					'secondary': ['me', 'her', 'him']
 				}, 
 				{
 					'primary': ['been', 'be', 'is'],
 					'secondary': ['rap', 'touch', 'grop', 'fondl']
 				}, 
 			],
		}
};

//What the response template should be if a match is found.
crisis.prototype.template	=	'Would you like help for you, or someone you know,';

//What the response string should be if a match is found. 
crisis.prototype.helpString	=	{
		'suicide':	'who is in danger of hurting themselves or committing suicide?', 
		'ipv':		'who is suffering from intimate, emotional, or physical abuse or violence?', 
		'sar':		'who has experienced sexual assault, rape, or inappropriate contact?'
};

//Where the prompt should take the user if they agree. 
crisis.prototype.redirects	=	{
		'suicide':	'http://www.suicide.org/if-you-are-suicidal.html', 
		'ipv':		'http://www.thehotline.org/help/', 
		'sar':		'https://rainn.org/get-help'
};

//The amount of time to wait before searching. 
crisis.prototype.waitTime	=	500;

//Store all nodes and their identifiers.
crisis.prototype.nodes		=	{};

//Store all compiled regex.
crisis.prototype.regex		=	{};

/**
 * Builds regular expressions for testing. 
 */
crisis.prototype.buildRegex	=	(function() {
	//For each search category.
	for (var key in this.search) {
		//Skip this iteration if the property is from prototype.
		if (!this.search.hasOwnProperty(key)) continue;
		
		//Create the regular expression collection if not yet created.
		this.regex[key]	=	this.regex[key] || [];
		
		//If there are combinations.
		if (typeof this.search[key].combinations === 'object') {
			//For each set of combinations.
			for (var set = 0; set < this.search[key].combinations.length; set++) {
				//For each primary combination.
				for (var i = 0; i < this.search[key].combinations[set].primary.length; i++) {
					//For each secondary combination.
					for (var n = 0; n < this.search[key].combinations[set].secondary.length; n++) {
						//Add the regular expression to list of regular expressions. 
						this.regex[key].push(
								new RegExp(
										this.search[key].combinations[set].primary[i].replace(/\s+/, "\\s+") + 
										'[e|s|d|es|ed|ing|ting]*' + //Support for multiple words.
										'\\s+' + //Any whitespace. 
										this.search[key].combinations[set].secondary[n].replace(/\s+/, "\\s+") + 
										'[e|s|d|es|ed|ing|ting]*', //Support for multiple words.
								'gi')
						);
					}
				}
			}
		}
		
		//If there are strings.
		if (typeof this.search[key].strings === 'object') {
			//For each string.
			for (var i = 0; i < this.search[key].strings.length; i++) {
				//Add the regular expression to list of regular expressions. 
				this.regex[key].push(new RegExp(this.search[key].strings[i].replace(/\s+/, "\\s+"), 'i'));
			}
		}
	}
});

/**
 * Logic to detect a crisis situation based on regular expressions. 
 */
crisis.prototype.detect		=	(function(uid) {
	//If the input exists. 
	if (typeof this.nodes[uid].input !== 'undefined') {
		//For each search category.
		for (var key in this.regex) {
			//Skip this iteration if the property is from prototype.
			if (!this.regex.hasOwnProperty(key)) continue;
			
			//For each regular expression.
			for (var i = 0; i < this.regex[key].length; i++) { 
				console.log(this.nodes[uid].input.value.search(this.regex[key][i]));
				
				//Test this string.
				if (this.nodes[uid].input.value.search(this.regex[key][i]) > -1) {
					//Create a prompt.
					if (confirm(crisis.template.trim() + ' ' + crisis.helpString[key])) {
						//Open a new window and focus. 
						window.open(crisis.redirects[key], '_blank').focus();
					}
					
					//Deactivate this element.
					crisis.deactivate(uid);
					
					//Break.
					break;
				}
			}
		}
	}
});

/**
 * Creates a new handler to search the input. 
 * 
 * @param string uid
 */
crisis.prototype.activate	=	(function(uid) {
	//If the UID exists.
	if (typeof this.nodes[uid] !== 'undefined' && this.nodes[uid]) { 
		//Assign crisis for sub functions. 
		var	__crisis	=	this;
		
		//Store a more comprehensive object. 
		this.nodes[uid]	=	{'input': this.nodes[uid], 'uid': uid, 'handler': null};
		
		//Add the data attribute.
		this.nodes[uid].input.setAttribute('data-crisis-id', uid);
		
		//Create a new handler.
		this.nodes[uid].handler	=	function(uid) {
			//Detect whether there's a crisis. 
			__crisis.detect(uid);
		};
			
		//Create a new timer.
		this.nodes[uid].timer	=	null;
		
		//When any input change is detected. 
		this.nodes[uid].input.oninput	=	function() {
			//Get the uid.
			var	uid	=	this.getAttribute('data-crisis-id');
			
			//Clear the existing timer.
			clearTimeout(__crisis.nodes[uid].timer);
			
			//Set a new timeout.
			__crisis.nodes[uid].timer	=	setTimeout(function() {
				//Run the handler.
				__crisis.nodes[uid].handler(uid);
			}, __crisis.waitTime);
			
			//Return true;
			return true;
		};
		
		//Backwards compatible support.
		this.nodes[uid].input.onpropertychange	=	this.nodes[uid].input.oninput; 
	}
});

/**
 * Deactivates an existing handler. 
 * 
 * @param string uid
 */
crisis.prototype.deactivate	=	(function(uid) {
	//If the UID exists.
	if (typeof this.nodes[uid] !== 'undefined' && this.nodes[uid]) { 
		//Deactivate the handler.
		this.nodes[uid].handler	=	function() { return true; };
	}
});

/**
 * Generates a fairly unique identifier. 
 */
crisis.prototype.generate	=	(function() {
	//Return the randomized string. 
	return Math.floor(Math.random() * 0x18006624357).toString(16);
});

/**
 * Finds and gets all nodes that are defined to be searched. 
 */
crisis.prototype.getNodes	=	(function() {
	//For each type of input that needs to be searched.
	for (var i = 0; i < this.inputs.length; i++) {
		//Get all nodes.
		return document.querySelectorAll(this.inputs[i]);
	}
});

/**
 * Processes nodes and activates them for searching. 
 */
crisis.prototype.process	=	(function(nodes) {
	//Get all nodes. 
	var	nodes		=	this.getNodes();
	
	//For each node.
	for (var n = 0; n < nodes.length; n++) {
		//Generate a new UID.
		var	uid		=	this.generate();
		
		//Assign this node as processed.
		this.nodes[uid]	=	nodes[n];
		
		//Activate the node for searching. 
		this.activate(uid);
	}
});

