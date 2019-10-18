var gulp = require('gulp');
const gulpNewer = require("gulp-newer");
const changed = require('gulp-changed');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const gulpImageresize = require("gulp-image-resize");

gulp.task('default',['images']);

gulp.task('minify', () => {
  return gulp.src('public/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'));
});

gulp.task('images', () =>
    gulp.src(['static/uploads/*', '!static/uploads/*.svg'])
        .pipe(gulpNewer('thumbs/images/uploads'))
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

gulp.task('images', () =>
    gulp.src(['static/uploads/*', '!static/uploads/*.svg'])
        .pipe(gulpNewer('thumbs/images/uploads'))
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


