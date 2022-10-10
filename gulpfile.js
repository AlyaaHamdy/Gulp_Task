const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
//const cli = require('gulp-cli');


function buildStyles(){
    return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask(){
    watch(['sass/**/*.scss'],buildStyles)

}

exports.default = series(buildStyles, watchTask);
