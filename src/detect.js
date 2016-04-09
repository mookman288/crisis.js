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
				if (this.nodes[uid].input.value.search(this.regex[key][i])) {
					//Create a prompt.
					if (confirm(crisis.helpString[key])) {
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
