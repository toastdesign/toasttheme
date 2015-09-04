var gulp = require('gulp'),
	uglify = require('gulp-uglify')
	sass = require('gulp-sass')
	plumber = require('gulp-plumber')

// Scripts task
// Uglifies,
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('build/minjs'));
});

// Styles
// Styles
gulp.task('styles', function(){
	gulp.src('sass/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest(''))
		.pipe(livereload());
});

// Watch
// Watches js files
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('sass/**/*.scss', ['styles']);
});


gulp.task('default', ['scripts', 'styles', 'watch']);