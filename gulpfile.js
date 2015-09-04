var gulp = require('gulp'),
	uglify = require('gulp-uglify')
	sass = require('gulp-sass')
	plumber = require('gulp-plumber')
	imagemin = require('gulp-imagemin')
	prefix = require('gulp-autoprefixer');


// Scripts task
// Uglifies,
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('build/minjs'));
});

// Images
// Compress images 
gulp.task('image', function(){
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img'));
});

// Styles
// Compress scss styles
gulp.task('styles', function(){
	gulp.src('sass/style.scss')
		.pipe(plumber())
		.pipe(sass({
			style:'expanded'
		}))
		.pipe(prefix('last 3 versions'))
		.pipe(gulp.dest(''))
});

// Watch
// Watches js files
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('sass/**/*.scss', ['styles']);
});


gulp.task('default', ['scripts', 'styles','image', 'watch']);