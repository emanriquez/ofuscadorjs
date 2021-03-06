'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => gulp.src('src/**/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(gulp.dest('dist')));
