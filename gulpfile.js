var gulp = require( 'gulp' ),
	less = require( 'gulp-less' ),
	browserSync = require( 'browser-sync' ),
	autoprefixer = require( 'gulp-autoprefixer' ),
	del = require( 'del' ),
	imagemin = require( 'gulp-imagemin' ),
	pngquant = require( 'imagemin-pngquant' ),
	concat = require( 'gulp-concat' ),
	uglify = require( 'gulp-uglifyjs' ),
	cache = require( 'gulp-cache' );
	

gulp.task( 'browser-sync', function() {
	browserSync( {
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task( 'less', function() {
	return gulp.src( 'app/less/**/*.less' )
		.pipe( less() )
		.pipe( autoprefixer( [ 'last 15 versions', '> 1%', 'ie 8', 'ie 7' ],
			{ cascade: true } ) )
		.pipe( gulp.dest( 'app/css' ) )
		.pipe( browserSync.reload( { stream: true } ) );
});

gulp.task( 'scripts', function() {
	return gulp.src( [ '' ] )
		.pipe( concat( 'libs.min.js' ) )
		.pipe( uglify() )
		.pipe( gulp.dest( 'app/js' ) );
} );

gulp.task( 'watch', [ 'browser-sync', 'less' ], function() {
	gulp.watch( 'app/less/**/*.less', [ 'less' ] );
	gulp.watch( 'app/*.html', browserSync.reload );
	gulp.watch( 'app/js/**/*.js', browserSync.reload );
});

gulp.task( 'default', [ 'watch' ] );

gulp.task( 'clean', function() {
	return del.sync( 'dist' );
});

gulp.task( 'img', function() {
	return gulp.src( 'app/img/**/*' )
		.pipe( cache( imagemin( {
			interlaces: true,
			progressive: true,
			svgoPlugins: [ { removeViewBox: false } ],
			use: [ pngquant() ]
		} ) ) )
		.pipe( gulp.dest( 'dist/img' ) );
});

gulp.task( 'build', [ 'less', 'clean', 'img' ], function() {
	var buildCss = gulp.src( 'app/css/**/*.css' )
		.pipe( gulp.dest( 'dist/css' ) );
		
	var buildFonts = gulp.src( 'app/fonts/**/*' )
		.pipe( gulp.dest( 'dist/fonts' ) );
		
	var buildJS = gulp.src( 'app/js/**/*' )
		.pipe( gulp.dest( 'dist/js' ) );
		
	var buildHTML = gulp.src( 'app/*.html' )
		.pipe( gulp.dest( 'dist' ) );
});

