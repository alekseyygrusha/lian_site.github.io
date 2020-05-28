const gulp = require('gulp');
const pug = require('gulp-pug');

module.exports = function pug2html () {
    return gulp.src('app/pug/global/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('app/'));
        
}

