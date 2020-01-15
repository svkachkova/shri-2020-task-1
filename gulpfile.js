'use strict';

const dir = {
    src: './src/blocks/',
    build: './stub/build/' 
};

const { task, series, src, dest } = require('gulp');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const del = require('del');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');

task('css', () => {
    return src(dir.src + '**/*.css', { sourcemaps: true })
        .pipe(plumber({
            errorHandler: err => {
                console.log(err.message);
                this.emit('end');
            }
        }))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(concat('style.css'))
        .pipe(csso())
        .pipe(dest(dir.build), { sourcemaps: true });
});

task('clean', () => del(dir.build));

task('default', series('clean', 'css'));
