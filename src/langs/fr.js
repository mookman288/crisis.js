//The language settings file. 
crisis.prototype.lang	=	{
	//What the response template should be if a match is found.
	'intro': 'Vous voudriez qu\'on vous aide, ou aider quelqu\'un que vous connaissez qui',
	//Endings to certain word fragments, for instance, "hit" + "ting" could be identified.
	'endings': ['e', 's', 'd', 'es', 'ed', 'ing', 'ting'], 
	'types': {
		'suicide': {
			//What the response string should be if a match is found. 
			'helpText':		'est en danger, veut se faire du mal ou se suicider ?',
			//Where the prompt should take the user if they agree. 
			'redirect':		'http://www.suicide.org/if-you-are-suicidal.html',
			//Which strings should be searched for. 
			'combinations':	[
				{
					'primary': ['tuer', 'blesser', 'couper'],
					'secondary': ['soi-même', 'elle-même', 'lui-même']
				},
				{
					'primary': ['se'],
					'secondary': ['suicider']
				}, 
				{
					'primary': ['finissez-en'], 
					'secondary': ['tout', 'maintenant']
				}
			], 
			'strings':		['veut mourrir']
		}, 
		'ipv': {
			//What the response string should be if a match is found. 
			'helpText':		'souffre émotionnellement, physiquement, intimement ou de violence ?',
			//Where the prompt should take the user if they agree. 
			'redirect':		'http://www.thehotline.org/help/',
			//Which strings should be searched for. 
			'combinations':	[
 				{
					'primary': ['taper', 'frapper', 'couper', 'abus', 'espionnage', 'blesser'],
					'secondary': ['me', 'her', 'him']
				}, 
				{
					'primary': ['suis', "je suis", 'est', "il est", "elle est", 'sont', "ils sont"], 
					'secondary': ['scared', 'afraid', 'terrified']
				}, 
				{
					'primary': ['était', 'être', 'est'], 
					'secondary': ['battre', 'couper', 'abus', 'espionner', 'blesser']
				}
			]
		}, 
		'sar': {
			//What the response string should be if a match is found. 
			'helpText':		'a vécu une violence sexuelle, un viol, ou des contacts inappropriés ?',
			//Where the prompt should take the user if they agree. 
			'redirect':		'https://rainn.org/get-help',
			//Which strings should be searched for. 
			'combinations':	[
  				{
 					'primary': ['violer', 'toucher', 'groupe', 'caresser'],
 					'secondary': ['moi', 'elle', 'lui']
 				}, 
 				{
 					'primary': ['était', 'être', 'est'],
 					'secondary': ['violer', 'toucher', 'groupe', 'caresser']
 				}, 
 			],
		}
	}
};
