'use strict'

const gulp = require('gulp');
const minifier = require('gulp-minifier');
const concat   = require('gulp-concat');

gulp.task('styles', function(){
  return gulp.src('./css/**/*.css')
             .pipe(minifier({
               minify: true,
               collapseWhitespace: true,
               conservativeCollapse: true,
               minifyCSS: true
             }))
             .pipe(concat('all.css'))
             .pipe(gulp.dest('public/css'))
});

gulp.task('styles_pattern', function(){
  return gulp.src('patterns/*.css')
             .pipe(minifier({
               minify: true,
               collapseWhitespace: true,
               conservativeCollapse: true,
               minifyCSS: true
             }))
             .pipe(concat('all.css'))
             .pipe(gulp.dest('public/patterns/css'))
});

gulp.task('default', ['styles', 'styles_pattern'])
