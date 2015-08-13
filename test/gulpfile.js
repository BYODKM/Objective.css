'use strict';

var gulp      = require('gulp');
var jade      = require('gulp-jade');
var notify    = require('gulp-notify');
var plumber   = require('gulp-plumber');
var webserver = require('gulp-webserver');

var config = {
  plumber: {
    errorHandler : notify.onError("Error: <%= error.message %>")
  },
  jade: {
    basedir: __dirname,
    pretty : false,
    self   : true
  },
  webserver: {
    host      : '0.0.0.0',
    livereload: true,
    open      : 'http://localhost:3000/',
    port      : 3000
  }
};

gulp.task('jade', function() {
  return gulp.src('./index.jade', {base: './'})
    .pipe(plumber(config.plumber))
    .pipe(jade(config.jade))
    .pipe(gulp.dest('.'));
});

gulp.task('serve', ['jade'], function() {
  return gulp.src('.')
    .pipe(webserver(config.webserver));
});

gulp.task('watch', ['serve'], function() {
  gulp.watch(['**/*.jade', '**/*.styl'], ['jade']);
});

gulp.task('default', ['watch']);
