
// INIT GULP
// -------------------------------------------------
// Load Gulp
var gulp = require('gulp');

// Load Browser-Sync
var browserSync = require('browser-sync').create();

// Load Plugins
var plugins = require("gulp-load-plugins")({
  	pattern: ['gulp-*', 'gulp.*'],
  	replaceString: /\bgulp[\-.]/
});


// APP CSS
// --------------------------------
gulp.task('styles', function() {
  	return gulp.src('./src/scss/**/*.scss')
		// - Compil in css
		.pipe(plugins.sass({
			includePaths: [
				// Bower Components
				'./bower_components'
			],
			outputStyle: 'expanded'
			// nested, expanded, compact, compressed
		}).on('error', plugins.sass.logError))

		// - Auto-prefix
    	.pipe(plugins.autoprefixer({
        	browsers: ['last 2 versions', 'ie >= 9'],
        	cascade: false
    	}))
		// - Create file in css directory
    	.pipe(gulp.dest('./www/css/'))
		.pipe(plugins.size({ title: '> Size:' }))
		// - Minify
    	.pipe(plugins.cssmin())
		.pipe(plugins.rename({suffix: '.min'}))
		.pipe(plugins.size({ title: '>> Minified Size:' }))
		// - Copy in css directory
    	.pipe(gulp.dest('./www/css/'))
});

// FONTAWESOME
// --------------------------------
gulp.task('font-awesome', function() {
    return gulp.src(['./bower_components/font-awesome/fonts/fontawesome-webfont.*'])
        .pipe(gulp.dest('./www/fonts/'));
});

// APP JS
// --------------------------------
gulp.task('scripts', function() {
  	return gulp.src([
		'./src/js/*.js'
	])
		// - Convert js versions
    	.pipe(plugins.babel({'presets': ['es2015'] }))
		// - Concat js files
    	.pipe(plugins.concat('app.js'))
		// - Create file in js directory
    	.pipe(gulp.dest('./www/js'))
		// - Minify
    	.pipe(plugins.rename({suffix: '.min'}))
    	.pipe(plugins.uglify())
		// - Copy in js directory
    	.pipe(gulp.dest('./www/js'))
});


// JQUERY
// -------------------------------------
gulp.task('jquery-js', function() {
  	return gulp.src([
		'./bower_components/jquery/dist/jquery.js',
    ])
    	.pipe(plugins.babel({'presets': ['es2015']}))
    	.pipe(plugins.concat('jquery.js'))
    	.pipe(gulp.dest('./www/js'))
    	.pipe(plugins.rename({suffix: '.min'}))
    	.pipe(plugins.uglify())
    	.pipe(gulp.dest('./www/js'))
});


// FOUNDATION JS
// -------------------------------------
gulp.task('foundation-js', function() {
  	return gulp.src([
    	// Required if you need any components
    	'./bower_components/what-input/what-input.js',
    	'./bower_components/foundation-sites/js/foundation.core.js',
    	'./bower_components/foundation-sites/js/foundation.util.*.js',

    	// Uncomment the components you need:
    	'./bower_components/foundation-sites/js/foundation.abide.js',
    	'./bower_components/foundation-sites/js/foundation.accordion.js',
    	'./bower_components/foundation-sites/js/foundation.accordionMenu.js',
    	'./bower_components/foundation-sites/js/foundation.drilldown.js',
    	'./bower_components/foundation-sites/js/foundation.dropdown.js',
    	'./bower_components/foundation-sites/js/foundation.dropdownMenu.js',
    	'./bower_components/foundation-sites/js/foundation.equalizer.js',
    	'./bower_components/foundation-sites/js/foundation.interchange.js',
    	'./bower_components/foundation-sites/js/foundation.magellan.js',
    	'./bower_components/foundation-sites/js/foundation.offcanvas.js',
    	'./bower_components/foundation-sites/js/foundation.orbit.js',
    	'./bower_components/foundation-sites/js/foundation.responsiveMenu.js',
    	'./bower_components/foundation-sites/js/foundation.responsiveToggle.js',
    	'./bower_components/foundation-sites/js/foundation.reveal.js',
    	'./bower_components/foundation-sites/js/foundation.slider.js',
    	'./bower_components/foundation-sites/js/foundation.sticky.js',
    	'./bower_components/foundation-sites/js/foundation.tabs.js',
    	'./bower_components/foundation-sites/js/foundation.toggler.js',
    	'./bower_components/foundation-sites/js/foundation.tooltip.js',
    ])
    	.pipe(plugins.babel({'presets': ['es2015']}))
    	.pipe(plugins.concat('foundation.js'))
    	.pipe(gulp.dest('./www/js'))
    	.pipe(plugins.rename({suffix: '.min'}))
    	.pipe(plugins.uglify())
    	.pipe(gulp.dest('./www/js'))
});


// Watch files for changes (without Browser-Sync)
// ------------------------------------------------
gulp.task('watch', function() {
	gulp.watch('./src/scss/**/*.scss', ['styles']);
 	gulp.watch('./src/js/**/*.js', ['scripts']);
	gulp.watch('./bower_components/foundation-sites/js/*.js', ['foundation-js']);
});


// ------------------------------------------------
// INIT PROJECT
// ------------------------------------------------
gulp.task('init', function() {
  	gulp.start('styles');
  	gulp.start('scripts');
	gulp.start('jquery-js');
	gulp.start('foundation-js');
	gulp.start('font-awesome');
});


// ------------------------------------------------
// DEV-SERVER
// ------------------------------------------------
gulp.task('dev-server', function() {
    // Watch files
    var files = [
    	'./www/css/*.css',
    	'./www/js/*.js',
    	'./www/img/**/*.{png,jpg,gif,svg}',
		'./**/*.php',
		'./**/*.html'
    ];

    browserSync.init(files, {
	    proxy: "http://localhost:8888/"
    });

    gulp.watch('./src/scss/**/*.scss', ['styles']);
    gulp.watch('./src/js/**/*.js', ['scripts']);
});
