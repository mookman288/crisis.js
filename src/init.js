//Initialization of the application. 
crisis.prototype.init	=	function() {
	//Build regex.
	this.buildRegex();
	
	//If the system should automatically begin.
	if (this.automatic) this.process();
	
	//Return this.
	return this;
};
