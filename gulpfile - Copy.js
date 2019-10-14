var gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const gulpImageresize = require("gulp-image-resize");
const gulpNewer = require("gulp-newer");

// Specific Task
function js() {
    return gulp
    .src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
}
gulp.task(js);

// Specific Task
function gulpSass() {
    return gulp
    .src(['src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}
gulp.task(gulpSass);

// Run multiple tasks
gulp.task('start', gulp.series(js, gulpSass));