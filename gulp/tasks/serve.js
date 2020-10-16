const gulp = require('gulp');
const pug2html = require('./pug2html');
const scss2css = require('./styles');

const server = require('browser-sync').create();

function readyReload(cb) {
    server.reload();
    cb();
  }

module.exports = function serve(cb) {
    server.init({        
        server: './build',
        notify: false,
        open: true,
        cors: true,
    });


    gulp.watch('./src/components/**/**/*.scss', gulp.series(scss2css, readyReload));
    gulp.watch('./src/pages/**/*.scss', gulp.series(scss2css, readyReload));
    gulp.watch('./src/assets/styles/*.scss', gulp.series(scss2css, readyReload));
    gulp.watch('src/pages/**/*.pug', gulp.series(pug2html, readyReload));
    gulp.watch('src/components/**/**/*.pug', gulp.series(pug2html, readyReload));

    return cb();
}