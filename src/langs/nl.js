//The language settings file. 
crisis.prototype.lang	=	{
	//What the response template should be if a match is found.
	'intro': 'Wil jij, of iemand die je kent, graag geholpen worden?',
	//Endings to certain word fragments, for instance, "hit" + "ting" could be identified.
	'endings': ['en', 't', 'den', 'ten', 'te'], 
	'types': {
		'suicide': {
			//What the response string should be if a match is found. 
			'helpText':		'Is in gevaar van zichzelf wat aan te doen of zelfmoord te plegen?',
			//Where the prompt should take the user if they agree. 
			'redirect':		'http://www.suicide.org/if-you-are-suicidal.html',
			//Which strings should be searched for. 
			'combinations':	[
				{
					'primary': ['vermoord', 'doet pijn', 'snijdt'],
					'secondary': ['mijzelf', 'haarzelf', 'zichzelf']
				},
				{
					'primary': ['zelfmoord'],
					'secondary': ['plegen']
				}, 
				{
					'primary': ['er een einde aan maken'], 
					'secondary': ['alles', 'nu']
				}
			], 
			'strings':		['Wil graag dood']
		}, 
		'ipv': {
			//What the response string should be if a match is found. 
			'helpText':		'Leidt aan intiem, emotioneel of fysisch misbruik of geweld?',
			//Where the prompt should take the user if they agree. 
			'redirect':		'http://www.thehotline.org/help/',
			//Which strings should be searched for. 
			'combinations':	[
 				{
					'primary': ['sloeg', 'raken', 'sneed', 'misbruik', 'stalk', 'pijn doen'],
					'secondary': ['mij', 'haar', 'hem']
				}, 
				{
					'primary': ['ben', "ik ben", 'is', "hij is", "zij is", 'zijn', "zij zijn"], 
					'secondary': ['bang', 'bezorgd', 'doodsbang']
				}, 
				{
					'primary': ['was', 'ben', 'is'], 
					'secondary': ['slaag', 'snij', 'misbruik', 'stalk', 'doe pijn']
				}
			]
		}, 
		'sar': {
			//What the response string should be if a match is found. 
			'helpText':		'heef sexueel geweld, verkrachting of ander ongepast contact ervaren?',
			//Where the prompt should take the user if they agree. 
			'redirect':		'https://rainn.org/get-help',
			//Which strings should be searched for. 
			'combinations':	[
  				{
 					'primary': ['verkracht', 'aanraking', 'tast', 'streel'],
 					'secondary': ['ik', 'haar', 'hij']
 				}, 
 				{
 					'primary': ['was', 'voor', 'is'],
 					'secondary': ['verkracht', 'aanraking', 'tast', 'streel']
 				}, 
 			],
		}
	}
};
