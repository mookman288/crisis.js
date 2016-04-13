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

//Collection of all JavaScript files.
var	files		=	['./src/crisis.js', './src/settings.js', './src/regex.js', './src/detect.js', './src/register.js'];

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
	return gulp.src(files)
		.pipe(concat('crisis.js'))
		.pipe(gulp.dest('./dist'));
});

//Compress JavaScript.
gulp.task('compress', function() {
	return gulp.src('./dist/crisis.js')
		.pipe(gulpif(!dev, uglify({'preserveComments': 'license'})))
		.pipe(rename({
			suffix: '.min'
        }))
        .pipe(gulp.dest('./dist'));
});

//BrowserSync.
gulp.task('browserSync', function() {
	browserSync.init({
		files: [
		    './*.html', 
		    './dist/crisis.min.js'
		], 
		open: false, 
		port: 999, 
		server: {
			baseDir: "./", 
		}
	});
});

//Watch for changes.
gulp.task('watch', function() {
	//Setup watch for hinting.
	gulp.watch('./src/**/*.js', ['hint']);
	
	//Setup watch for JavaScript.
	gulp.watch('./src/**/*.js', ['js']);
	
	//Setup watch for Compress.
	gulp.watch('./dist/**/*.js', ['compress']);
});

//Task runner. 
gulp.task('default', (!dev) ? ['hint', 'js', 'compress'] : ['hint', 'js', 'compress', 'browserSync', 'watch']);