const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer =  require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const pug2html = require('./gulp/tasks/pug2html');
let browserSync = require('browser-sync').create();


function sync (done) {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
        port: 3000
    });
    done();
}
function browserReload(done) {
    browserSync.reload();
    done();
}
function gulpWatch() {
    gulp.watch('app/scss/**/*', styles);
    gulp.watch('app/pug/**/*.pug', pug2html)
    gulp.watch('app/**/*.html', browserReload);
    gulp.watch('app/**/*.js', browserReload);
}

function styles() {
    return  gulp.src('app/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: "compressed"
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.stream());
}

gulp.task('default', gulp.parallel(sync, pug2html, gulpWatch));


