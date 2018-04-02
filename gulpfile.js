'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

gulp.task('default', ['less'], function() {
  gulp.watch('./source/css/*.less', ['less']);
});

gulp.task('less', function() {
  return gulp.src('./source/css/xoxo.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      plugins: [autoprefix]
     }))
    .on('error', console.error.bind(console))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./source/css'));
});

gulp.task('scripts', function() {
  var files = [
    './source/js/xoxo.js',
  ];

  return gulp.src(files)
    .pipe(uglify())
    .pipe(gulp.dest('./source/js'));
});
