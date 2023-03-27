const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    console.log("Function Script");
    return  gulp.src('./src/scripts/js/*.js')
            .pipe(uglify())                        
            .pipe(gulp.dest('./dist/scripts/js'));
}

function styles(){
    console.log("Function Styles");
    return  gulp.src('./src/styles/*.scss')
            .pipe(sass({ outputStyle:'compressed'}))
            .pipe(gulp.dest('./dist/css'));
}

function images(){
    console.log("Function image");
    return  gulp.src('./src/shared/images/**/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./dist/shared/images'));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/js/*.js', gulp.parallel(scripts));
}