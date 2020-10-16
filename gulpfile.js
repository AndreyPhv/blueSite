const gulp = require('gulp');
//const browserSync = require('browser-sync');
const pug2html = require('./gulp/tasks/pug2html');
const serve = require('./gulp/tasks/serve');
const scss2css = require('./gulp/tasks/styles');



//module.exports.start = gulp.series(pug2html, scss2css);
module.exports.start = gulp.series(serve);