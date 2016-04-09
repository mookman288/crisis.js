//Automatically add a handler to watch all specified inputs. 
crisis.prototype.automatic	=	true;

//Which inputs should be watched. 
crisis.prototype.inputs		=	['input[type=text]', 'textarea'];

//Which strings should be searched for. 
crisis.prototype.search		=	{
		'suicide':	{
			'combinations': [
				{
					'primary': ['kill', 'hurt', 'cut'],
					'secondary': ['myself', 'herself', 'himself']
				},
				{
					'primary': ['commit', 'committing'],
					'secondary': ['suicide']
				}, 
				{
					'primary': ['want'],
					'secondary': ['to die']
				}
			],
			'strings': []
		}
};

//What the response string should be if a match is found. 
crisis.prototype.helpString	=	{
		'suicide':	'Would you like help for you, or someone you know, who is in danger of committing suicide?'
};

//Where the prompt should take the user if they agree. 
crisis.prototype.redirects	=	{
		'suicide':	'http://www.suicide.org/if-you-are-suicidal.html'
};

//The amount of time to wait before searching. 
crisis.prototype.waitTime	=	500;

//Store all nodes and their identifiers.
crisis.prototype.nodes		=	{};

//Store all compiled regex.
crisis.prototype.regex		=	{};
