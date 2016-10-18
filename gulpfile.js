//Declare variables.
var browserSync	=	require('browser-sync').create();
var	concat		=	require('gulp-concat');
var	gulp		=	require('gulp');
var	gulpif		=	require('gulp-if');
var	jshint		=	require('gulp-jshint');
var notify		=   require('gulp-notify');
var	reload		=	browserSync.reload;
var	rename		=	require('gulp-rename');
var	uglify		=	require('gulp-uglify');
var yargs		=	require('yargs');

//Get all arguments.
var	argv		=	require('yargs').argv;

//Check if this is a development version. 
var	dev			=	(!argv.dev) ? false : true;

//Location of the source files.
var	src			=	'./src/';

//Location of the distribution files.
var	dist		=	'./dist/';

//Collection of all languages.
var	langs		=	['en'];

//Collection of all JavaScript files.
var	files		=	['crisis', 'settings', 'regex', 'detect'];

//Set the default tasks.
var	tasks		=	{
		'prod': ['hint', 'js'].concat(langs), 
		'dev': ['hint', 'js'].concat(langs).concat(['browserSync', 'watch'])
}


//For each language.
for (var i = 0; i < langs.length; i++) {
	//Create a task set for this language.
	tasks[langs[i] + '-dev']	=	['hint', langs[i], 'js'];
	tasks[langs[i]]				=	['hint', langs[i], 'js', 'browserSync', 'watch'];
}

//Hint JavaScript.
gulp.task('hint', function() {
	return gulp.src(['/src/**/*.js'])
		.pipe(jshint())
		.pipe(notify(function(file) {
			//If not success.
			if (!file.jshint.success) {
				//Get the errors.
				var	errors	=	file.jshint.results.map(function(data) {
					//If there's an error.
					if (data.error) {
						//Increment the error.
						return "(" + data.error.line + ":" + data.error.character + ") " + data.error.reason;
					}
				}).join("\n");
				
				//Display the errors.
				return file.relative + "[" + file.jshint.results.length + " errors]\n" + errors;
			}
		}))
		.pipe(jshint.reporter('default'));
});

//Compile JavaScript. 
gulp.task('js', function() {
	return gulp.src(files.map(function(a) {
		return src + a + '.js'
	}))
		.pipe(concat('crisis.js'))
		.pipe(gulp.dest(dist));
});

//Compress JavaScript.
gulp.task('compress', function() {
	return gulp.src(dist + '**/*.js')
		.pipe(gulpif(!dev, uglify({'preserveComments': 'license'})))
		.pipe(rename({
			suffix: '.min'
        }))
        .pipe(gulp.dest('./dist'));
});

//For each language.
for (var i = 0; i < langs.length; i++) {
	//Create a task for this language.
	gulp.task(langs[i], ['js'], function() {
		return gulp.src([dist + 'crisis.js', src + 'langs/' + langs[i] + '.js'])
			.pipe(concat('crisis.' + langs[i] + '.js'))
			.pipe(gulp.dest(dist));
	});
}

//BrowserSync.
gulp.task('browserSync', function() {
	browserSync.init({
		files: [
		    './*.html', 
		    dist + '*.js'
		], 
		open: false, 
		port: 9999, 
		server: {
			baseDir: "./", 
		}
	});
});

//Watch for changes.
gulp.task('watch', function() {
	//Setup watch for hinting.
	gulp.watch(src + '**/*.js', ['hint']);
	
	//Setup watch for JavaScript.
	gulp.watch(src + '**/*.js', ['js']);
	
	//For each language.
	for (var i = 0; i < langs.length; i++) {
		//Setup watch for the language.
		gulp.watch(src + 'langs/' + langs[i] + '.js', [langs[i]]);
	}
	
	//Setup watch for compression.
	gulp.watch(dist + '**/*.js', ['compress']);
});

//Task runner for all languages.
gulp.task('default', (!dev) ? tasks.prod : tasks.dev);

//For each language.
for (var i = 0; i < langs.length; i++) {
	//Task runner for this language.
	gulp.task('lang-' + langs[i], (!dev) ? tasks[langs[i]] : tasks[langs[i] + '-dev']);
}