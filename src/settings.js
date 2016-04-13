//Automatically add a handler to watch all specified inputs. 
crisis.prototype.automatic	=	true;

//Which inputs should be watched. 
crisis.prototype.inputs		=	['input[type=text]', 'textarea'];

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
