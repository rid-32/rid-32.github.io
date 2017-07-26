var gulp = require( 'gulp' ),
	less = require( 'gulp-less' ),
	browserSync = require( 'browser-sync' ),
	autoprefixer = require( 'gulp-autoprefixer' ),
	concat = require( 'gulp-concat' ),
	uglify = require( 'gulp-uglifyjs' );
	

gulp.task( 'browser-sync', function() {
	browserSync( {
		server: {
			baseDir: ''
		},
		notify: false
	});
});

gulp.task( 'less', function() {
	return gulp.src( 'less/**/*.less' )
		.pipe( less() )
		.pipe( autoprefixer( [ 'last 15 versions', '> 1%', 'ie 8', 'ie 7' ],
			{ cascade: true } ) )
		.pipe( gulp.dest( 'css' ) )
		.pipe( browserSync.reload( { stream: true } ) );
});

gulp.task( 'scripts', function() {
	return gulp.src( [ 'libs/jquery/dist/jquery.min.js' ] )
		.pipe( concat( 'libs.min.js' ) )
		.pipe( uglify() )
		.pipe( gulp.dest( 'js' ) );
} );

gulp.task( 'watch', [ 'browser-sync', 'less', 'scripts' ], function() {
	gulp.watch( 'less/**/*.less', [ 'less' ] );
	gulp.watch( '*.html', browserSync.reload );
	gulp.watch( 'js/**/*.js', browserSync.reload );
});

gulp.task( 'default', [ 'watch' ] );
