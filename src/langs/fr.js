//The language settings file. 
crisis.prototype.lang	=	{
	//What the response template should be if a match is found.
	'intro': 'Voudriez-vous de l'aide pour vous, ou pour quelqu'un que vous connaissez, qui',
	//Endings to certain word fragments, for instance, "hit" + "ting" could be identified.
	'endings': ['e', 's', 'es', 'é', 'ée', 'és', 'ées' 'r', 't', 'u', 'ue', 'us', 'ues', 'i', 'is', 'ie', 'ies'], //a lot of grammar agreements to make
	'types': {
		'suicide': {
			//What the response string should be if a match is found. 
			'helpText':	 'qui risque de se blessser ou de se suicider ?',
			//Where the prompt should take the user if they agree. 
			'redirect':		'http://www.suicide.org/if-you-are-suicidal.html',
			//Which strings should be searched for. 
			'combinations':	[
				{
					'primary': ['tu', 'bless', 'coup'], // Should the ending be included ?
					'secondary': ['soi-même', 'elle-même', 'lui-même']
				},
				{
					'primary': ['commettre'], //not that accurate, should be only "se suicider"
					'secondary': ['suicide']
				}, 
				{
					'primary': ['finir'], 
					'secondary': ['tout', 'maintenant']
				}
			], 
			'strings':		['veut mourir']
		}, 
		'ipv': {
			//What the response string should be if a match is found. 
			'helpText':		"souffre d'abus ou de violences intimes, émotionnelles ou physiques ?",
			//Where the prompt should take the user if they agree. 
			'redirect':		'http://www.thehotline.org/help/',
			//Which strings should be searched for. 
			'combinations':	[
 				{
					'primary': ['frapp', 'batt', 'coup', 'abus', 'traqu', 'bless'],
					'secondary': ['moi', 'me', "m'", 'elle', 'lui'] // maybe need to switch primary and secondary here
				}, 
				{
					'primary': ['suis', "je suis", 'est', "il est", "elle est", 'sont', "ils sont"], 
					'secondary': ['apeur', 'effray', 'terrifi']
				}, 
				{
					'primary': ['a été', 'être', 'est'], 
					'secondary': ['batt', 'coup', 'abus', 'traqu', 'bless']
				}
			]
		}, 
		'sar': {
			//What the response string should be if a match is found. 
			'helpText':		'a subi une agression sexuelle, un viol or un contact inapproprié ?',
			//Where the prompt should take the user if they agree. 
			'redirect':		'https://rainn.org/get-help',
			//Which strings should be searched for. 
			'combinations':	[
  				{
 					'primary': ['viol', 'touch', 'tât', 'tat', 'caress'],
 					'secondary': ['moi', 'me', "m'",  'her', 'him'] // maybe need to switch primary and secondary here
 				}, 
 				{
 					'primary': ['a été', 'être', 'est'],
 					'secondary': ['viol', 'touch', 'tât', 'tat', 'caress']
 				}, 
 			],
		}
	}
};
