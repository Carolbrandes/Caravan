const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


function compilaSass() {
    return gulp
        .src('scss/styles.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
}

function watch() {
    gulp.watch('scss/*.scss', compilaSass);
}

gulp.task('sass', compilaSass);
gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch'));