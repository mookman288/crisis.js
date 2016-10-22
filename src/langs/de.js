//German - HACKTOBER COMMIT ♥
//de_DE
crisis.prototype.lang	=	{
	'intro': 'Brauchst du Hilfe, oder jemand der',
	'endings': ['en',"et","igt"], //A little bit unsure here, this should work out though 
	'types': {
		'suicide': {
			'helpText':		'is in danger of hurting themselves or dying by suicide?',
			'redirect':		'http://www.suicide.org/if-you-are-suicidal.html', // German equivalent?
			'combinations':	[
				{
					//'primary': ['töten', 'verletzen', 'stechen'], // Should the endings be included?
					'primary': ['töt', 'verletz', 'stech'],
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
					'primary': ['schlag', 'abstech', 'missbrauch', 'stalk', 'wehget'],
					'secondary': ['mich', 'ihn', 'ihm', 'ihr', 'sie']
				}, 
				{
					'primary': ['bin', "ich bin", 'ist', "er ist", "sie ist", 'sind', "sie sind"], 
					'secondary': ['ängstlich', 'besorgt', 'erschrocken']
				}, 
				{
					'primary': ['wat', 'ist'], 
					'secondary':  ['schlag', 'abstech', 'missbrauch', 'stalk', 'wehget'],
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
