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
