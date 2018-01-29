var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var pkg = require('./package.json');

// var browserSync = require('browser-sync');
var reload = browserSync.reload;

var uglify = require('gulp-uglify');

// Set the banner content
var banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  ''
].join('');

// Compile SCSS
gulp.task('css:compile', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src([
      './css/*.css',
      '!./css/*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// Copy vendor files from /node_modules into /vendor
gulp.task('copy', function() {
  gulp.src([
      'node_modules/bootstrap/dist/**/*',
      '!**/npm.js',
      '!**/bootstrap-theme.*',
      '!**/*.map'
    ])
    .pipe(gulp.dest('vendor/bootstrap'))

  gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('vendor/jquery'))
});

// Default task
gulp.task('default', ['css', 'copy']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
});

//Sass preprocessor
gulp.task('sass', function () {
    return gulp.src('./app/'+ ['sass/' || 'scss/']+ ['*.sass' || '*.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/scss/*.scss', ['sass']);
    gulp.watch('./app/sass/*.sass', ['sass']);
});

//injects files into index.html
gulp.task('index', function () {
    var target = gulp.src('app/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    //Should skip the vendor folder
    var sources = gulp.src(['./app/js/**/*.js', './app/css/**/*.css'], {read: false}, {relative: true});
    return target.pipe(inject(sources, {ignorePath: 'app/', addRootSlash: false}))
        .pipe(gulp.dest('./app/'));
});

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'css'], function() {
  gulp.watch('./app/**/*.scss', ['css']);
  gulp.watch('./app/**/*.sass', ['sass', 'css', reload]);
  // gulp.watch(['./**/*.html', './app/**/*.css', './app/**/*.js'], {cwd: 'app'}, reload);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', reload);
});

gulp.task('go', ['browserSync', 'css', 'sass', 'index'], function() {
    gulp.watch('./app/**/*.scss', ['css']);
    gulp.watch('./app/**/*.sass', ['sass', 'css', reload]);
    gulp.watch(['**/*.html', '**/*.css', '**/*.js'], {cwd: 'app/'}, reload);
    // Reloads the browser whenever HTML or JS files change
    // gulp.watch(['*.html', 'app/**/*.css','app/**/*.js'], reload);
});

