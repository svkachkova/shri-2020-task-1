'use strict';

const dir = {
    blocks: './src/blocks/',
    content: './src/content/',
    images: './assets/images/',
    build: './stub/build/' 
};

const { task, series, parallel, src, dest } = require('gulp');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const del = require('del');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');

task('css', () => {
    return src([dir.blocks + '**/*.css', dir.content + '*.css', './src/page.css'])
        .pipe(plumber({
            errorHandler: err => {
                console.log(err.message);
                this.emit('end');
            }
        }))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(concat('style.css'))
        .pipe(csso())
        .pipe(dest(dir.build));
});

task('js', () => {
    return src('./src/script.js')
        .pipe(dest(dir.build))
});

task('clean', () => del(dir.build));

task('default', series('clean', parallel('css', 'js')));
