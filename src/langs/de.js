//German - HACKTOBER COMMIT ♥
//de_DE
crisis.prototype.lang	=	{
	'intro': 'Brauchst du Hilfe, oder jemand der',
	'endings': ['en',"et","igt","igte"], //A little bit unsure here, this should work out though 
	'types': {
		'suicide': {
			'helpText':		'ist in Gefahr sich selbst zu verletzen?',
			'redirect':		'http://www.suicide.org/if-you-are-suicidal.html', // German equivalent?
			'combinations':	[
				{
					//'primary': ['töten', 'verletzen', 'stechen'], // Should the endings be included?
					'primary': ['töt', 'verletz', 'stech', 'stich'],
					'secondary': ['mich', 'ihn', 'ihm', 'ihr', 'sie']
				},
				{
					'primary': ['selbstmord'],
					'secondary': ['begehen']
				}, 
				{
					'primary': ['beende es'], 
					'secondary': ['alles', 'jetzt']
				}
			], 
			'strings':		['will sterben']
		}, 
		'ipv': {
			'helpText':		'leidet an intimen, emotionalen oder körperlichen Missbrauch oder Gewalt?',
			'redirect':		'http://www.thehotline.org/help/',  // German equivalent?
			'combinations':	[
 				{
					'primary': ['schlag', 'schläg', 'abstech', 'missbrauch', 'stalk', 'wehget'],
					'secondary': ['mich', 'ihn', 'ihm', 'ihr', 'sie']
				}, 
				{
					'primary': ['bin', "ich bin", 'ist', "er ist", "sie ist", 'sind', "sie sind"], 
					'secondary': ['ängstlich', 'besorgt', 'erschrocken']
				}, 
				{
					'primary': ['war', 'ist'], 
					'secondary':  ['schlag', 'abstech', 'missbrauch', 'stalk', 'gestalk', 'wehget'],
				}
			]
		}, 
		'sar': {
			'helpText':		'hat sexuelle Nötigung, Vergewaltigung oder andere unangemessene Kontakte erlebt?',
			'redirect':		'https://rainn.org/get-help', // German equivalent?
			'combinations':	[
  				{
 					'primary': ['vergewalt', 'angefass', 'anfass', 'missbrauch'],
 					'secondary': ['mich', 'ihn', 'ihm', 'ihr', 'sie']
 				}, 
 				{
 					'primary': ['war', 'ist'],
 					'secondary': ['vergewalt', 'angefass', 'anfass', 'missbrauch']
 				}, 
 			],
		}
	}
};
