//The language settings file. 
crisis.prototype.lang	=	{
	//What the response template should be if a match is found.
	'intro': 'Would you like help for you, or someone you know, who',
	//Endings to certain word fragments, for instance, "hit" + "ting" could be identified.
	'endings': ['e', 's', 'd', 'es', 'ed', 'ing', 'ting'], 
	'types': {
		'suicide': {
			//What the response string should be if a match is found. 
			'helpText':		'is in danger of hurting themselves or dying by suicide?',
			//Where the prompt should take the user if they agree. 
			'redirect':		'http://www.suicide.org/if-you-are-suicidal.html',
			//Which strings should be searched for. 
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
			//What the response string should be if a match is found. 
			'helpText':		'is suffering from intimate, emotional, or physical abuse or violence?',
			//Where the prompt should take the user if they agree. 
			'redirect':		'http://www.thehotline.org/help/',
			//Which strings should be searched for. 
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
			//What the response string should be if a match is found. 
			'helpText':		'has experienced sexual assault, rape, or inappropriate contact?',
			//Where the prompt should take the user if they agree. 
			'redirect':		'https://rainn.org/get-help',
			//Which strings should be searched for. 
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
	}
};
