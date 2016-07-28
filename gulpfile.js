const gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var obfuscate = require('gulp-obfuscate');
var minifycss = require('gulp-minify-css');


//---- sass
gulp.task('sass', function () {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/build/css'))
});

gulp.task('minifycss', function() {
  return gulp.src('./app/build/css/*.css')      //压缩的文件
    .pipe(gulp.dest('./app/build/css'))   //输出文件夹
    .pipe(minifycss());   //执行压缩
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass','minifycss']);
});
//---- sass



// Static Server + watching scss/html files
gulp.task('serve', function() {

  gulp.watch('./app/sass/**/*.scss', ['sass']);
  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch("./app/src/*.js", ['js-build']);
});


gulp.task('nodeModule',function(){
  //bootstrap
  gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./app/build/css'));
  gulp.src('./node_modules/bootstrap/fonts/glyphicons-halflings-regular.*')
    .pipe(gulp.dest('./app/build/fonts'));
  //bootstrap

});


//---- js
gulp.task('js-build',function(){
  gulp.src(['./app/src/main.js','./app/src/ui.js','./app/src/scroll.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./app/src'))
    .pipe(rename({suffix: '.min'}))
    .pipe(browserify())
    .pipe(uglify())
    //.pipe(obfuscate())
    .pipe(gulp.dest('./app/build/js'));
});

//---- js

gulp.task('default',['nodeModule','js-build','sass']);
