const gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var obfuscate = require('gulp-obfuscate');
var cleanCSS = require('gulp-clean-css');
var del = require('del');

//---- sass
gulp.task('sass',['delCss'], function () {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/sass/css'));
  gulp.run('concatcss');
  gulp.run('minify-css');
});

gulp.task('concatcss',['sass'],function(){
  return gulp.src(['./app/sass/css/*.css'])    //- 需要处理的css文件，放到一个字符串数组里
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./app/sass/css'));
});

gulp.task('minify-css',['concatcss'], function() {
  return gulp.src('./app/sass/css/all.min.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./app/build/css'));
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

//--del
gulp.task('delCss',function(){
  del([
    './app/sass/css/*.*',
    './app/build/css/all.min.css'
  ]);
});
//--del

gulp.task('default',['nodeModule','js-build','sass']);
