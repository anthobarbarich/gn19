var gulp = require('gulp');
var newer = require('gulp-newer');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');
var gulpImageresize = require("gulp-image-resize");

gulp.task('default',['images']);

gulp.task('minify', () => {
  return gulp.src('public/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'));
});

gulp.task('images', () =>
    gulp.src(['static/uploads/*', '!static/uploads/*.svg'])
        .pipe(newer('public/uploads'))
        .pipe(imagemin([    
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imageminMozjpeg({
                quality: 60
            }),
            imagemin.optipng({optimizationLevel: 7}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulpImageresize({
            width : 600,
			quality : 0.6,
          }))
        .pipe(gulp.dest('static/compressed/images/uploads'))
        .pipe(gulpImageresize({
            width : 480,
			quality : 0.7,
          }))
        .pipe(gulp.dest('static/thumbs/images/uploads')) 
	
);


