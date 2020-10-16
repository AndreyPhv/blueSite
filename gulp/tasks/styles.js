const gulp = require('gulp');
const sass = require('gulp-sass');

module.exports = function pug2html() {
    return gulp.src('src/assets/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'));
};