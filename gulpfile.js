var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

var jsFiles = [
    'static/js/jquery.min.js',
    'static/js/popper.min.js',
    'static/js/bootstrap.min.js',
    'static/js/owlcarousel.min.js',
    'static/js/particles.min.js',
    'static/js/script.js'
];

gulp.task('styles', function () {
    gulp.src('static/css/**/*.css')
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('static/dist/css'))
});

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('static/dist/js'))
});

gulp.task('scss', function () {
    gulp.src('static/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('static/css'))
});

gulp.task('watch', function () {
    gulp.watch('static/scss/style.scss', ['scss', 'styles']);
    gulp.watch('static/js/script.js', ['scripts']);
});
