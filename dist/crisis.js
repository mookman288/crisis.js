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

//Automatically add a handler to watch all specified inputs. 
crisis.prototype.automatic	=	true;

//Which inputs should be watched. 
crisis.prototype.inputs		=	['input[type=text]', 'search', 'textarea'];

//The amount of time to wait before searching. 
crisis.prototype.waitTime	=	500;

//Store all nodes and their identifiers.
crisis.prototype.nodes		=	{};

//Store all compiled regex.
crisis.prototype.regex		=	{};

//Initialization of the application. 
crisis.prototype.init	=	function() {
	//Build regex.
	this.buildRegex();
	
	//If the system should automatically begin.
	if (this.automatic) this.process();
	
	//Return this.
	return this;
};

/**
 * Builds regular expressions for testing. 
 */
crisis.prototype.buildRegex	=	(function() {
	//For each search category.
	for (var key in this.lang.types) {
		//Skip this iteration if the property is from prototype.
		if (!this.lang.types.hasOwnProperty(key)) continue;
		
		//Create the regular expression collection if not yet created.
		this.regex[key]	=	this.regex[key] || [];
		
		//If there are combinations.
		if (typeof this.lang.types[key].combinations === 'object') {
			//For each set of combinations.
			for (var set = 0; set < this.lang.types[key].combinations.length; set++) {
				//For each primary combination.
				for (var i = 0; i < this.lang.types[key].combinations[set].primary.length; i++) {
					//For each secondary combination.
					for (var n = 0; n < this.lang.types[key].combinations[set].secondary.length; n++) {
						//Add the regular expression to list of regular expressions. 
						this.regex[key].push(
								new RegExp(
										this.lang.types[key].combinations[set].primary[i].replace(/\s+/, "\\s+") + 
										'[e|s|d|es|ed|ing|ting]*' + //Support for multiple words.
										'\\s+' + //Any whitespace. 
										this.lang.types[key].combinations[set].secondary[n].replace(/\s+/, "\\s+") + 
										'[e|s|d|es|ed|ing|ting]*', //Support for multiple words.
								'gi')
						);
					}
				}
			}
		}
		
		//If there are strings.
		if (typeof this.lang.types[key].strings === 'object') {
			//For each string.
			for (var ii = 0; ii < this.lang.types[key].strings.length; ii++) {
				//Add the regular expression to list of regular expressions. 
				this.regex[key].push(new RegExp(this.lang.types[key].strings[ii].replace(/\s+/, "\\s+"), 'i'));
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
				//Test this string.
				if (this.nodes[uid].input.value.search(this.regex[key][i]) > -1) {
					//Create a prompt.
					if (confirm(crisis.lang.intro.trim() + ' ' + crisis.lang.types[key].helpText)) {
						//Open a new window and focus. 
						window.open(crisis.lang.types[key].redirect, '_blank').focus();
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
	//Declare variables.
	var	nodes	=	[];
	
	//For each type of input that needs to be searched.
	for (var i = 0; i < this.inputs.length; i++) { 
		//Get all of these nodes.
		var	all	=	document.querySelectorAll(this.inputs[i]);
		
		//For each node.
		for (var n = 0; n < all.length; n++) {
			//Add these nodes.
			nodes.push(all[n]);
		}
	}
	
	//Return nodes.
	return nodes;
});

/**
 * Processes nodes and activates them for searching. 
 */
crisis.prototype.process	=	(function(nodes) {
	//Get all nodes. 
	nodes		=	this.getNodes(); 
	
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
