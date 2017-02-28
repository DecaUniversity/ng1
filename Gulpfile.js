"use strict";

const gulp = require('gulp');
const injector = require('gulp-inject');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const gutil = require('gulp-util');
const sass = require('gulp-sass');

// Gulp Experiment
// Add runSequence to run tasks sequentially
const runSequence = require('run-sequence');

// Compiles SCSS files
gulp.task('sass', function() {

	gutil.log("task sass");

	return gulp.src("app/**/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("app/css"))
		.pipe(browserSync.stream());
});

// Lints the JS files
gulp.task('lint', () => {

	gutil.log("task lint");

	return gulp.src(['!app/lib', '!app/lib/**',
			'!app/dist', '!app/dist/**', 'app/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format());
		// .pipe(eslint.failAfterError());
});

// PROBLEMATIC TASK that makes js-watch task run many times within the same file save
// Transpiles ES6 to ES5 (... to support Safari mobile and Safari < 10 ... )
// Uncomment concat pipe to unable universal concatenation
gulp.task('transpile', () => {

	gutil.log("task transpile");

	return gulp.src(['!app/lib', '!app/lib/**',
			'!app/dist', '!app/dist/**', '!app/dist', 'app/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(babel())
		// .pipe(concat("compiled_source.js"))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("app/dist/src", {
			overwrite: true
		}))
});

// Inject JS files into the index.html (SPA model) in the right order that makes
// sense for an Angular app.
gulp.task('inject', () => {

	gutil.log("task inject");

	let wiredep = require('wiredep').stream;

	let options = {
		bowerJson: require('./bower.json'),
		directory: 'app/lib'
	};

	let injectOptions = {
		ignorePath: 'app/',
		addRootSlash: false
	};

	// let injectSrc = gulp.src(['!app/lib/', '!app/lib/**', 'app/**/*.css', 'app/**/**.js'], {
	// 	read: false,
	// });

	// The following are used when injected transpiled JS files that have been placed in dist/src
	// let injectSrc = gulp.src([
	// 	'app/dist/styles/**/*.css',
	// 	'app/dist/src/app.js',
	// 	'app/dist/src/**/*module.js',
	// 	'app/dist/src/**/*constants.js',
	// 	'app/dist/src/**/*provider.js',
	// 	'app/dist/src/**/*enum.js',
	// 	'app/dist/src/**/*model.js',
	// 	'app/dist/src/**/*config.js',
	// 	'app/dist/src/**/*filter.js',
	// 	'app/dist/src/**/*directive.js',
	// 	'app/dist/src/**/*decorator.js',
	// 	'app/dist/src/**/*interceptor.js',
	// 	'app/dist/src/**/*service.js',
	// 	'app/dist/src/**/*workflow.js',
	// 	'app/dist/src/**/*repository.js',
	// 	'app/dist/src/**/*resolver.js',
	// 	'app/dist/src/**/*controller.js',
	// 	'app/dist/src/**/**.js'], {
	// 	read: false,
	// });
	
	// Since Transpilation is problematic, ES6 files are getting injected into index.html
	let injectSrc = gulp.src([
		'!app/lib', '!app/lib/**', "!app/dist", "!app/dist/**",
		'app/css/**/*.css',
		'app/app.js',
		'app/**/*module.js',
		'app/**/*constants.js',
		'app/**/*provider.js',
		'app/**/*enum.js',
		'app/**/*model.js',
		'app/**/*config.js',
		'app/**/*filter.js',
		'app/**/*directive.js',
		'app/**/*decorator.js',
		'app/**/*interceptor.js',
		'app/**/*service.js',
		'app/**/*workflow.js',
		'app/**/*repository.js',
		'app/**/*resolver.js',
		'app/**/*controller.js',
		'app/**/**.js'], {
		read: false,
	});

	return gulp.src('app/*.html').
		pipe(wiredep(options)).
		pipe(injector(injectSrc, injectOptions)).
		pipe(gulp.dest('app'));
});

// Task that runs when JS files that are being watched change.
gulp.task('js-watch', (done) => {
	gutil.log("task js-watch");

	runSequence('lint', 'inject', function () {
		done();
	});
	
	// no need to reload here since html-watch will run as new JS files are injected
	// it touches index.html
	// browserSync.reload();
});

// Task that runs when .html files are changed
// This one reloads the browser
gulp.task('html-watch', () => {
	
	gutil.log("task html-watch");
	browserSync.reload();
	
});

// Task that services the application and uses browsersync to auto-refresh
// the browser when html, css or js files change.
gulp.task('serve', () => {

	gutil.log("task serve");

	browserSync.init({
		server: {
			baseDir: "app"
		}
	});
	
	gulp.watch(['!app/lib', '!app/lib/**', '!app/dist', '!app/dist/**', 'app/**/*.js'], ['js-watch']);
	gulp.watch(['!app/lib', '!app/lib/**', '!app/dist', '!app/dist/**', 'app/**/*.scss'], ['sass']);
	gulp.watch(['!app/lib', 'app/**/*.html'], ['html-watch']);

});

gulp.task("init", function (done) {

	runSequence('sass', 'lint', 'inject', 'serve', function () {
		console.log("Initialization tasks completed.");
		done();
	})

});

// Not running these tasks in parallel anymore
// gulp.task('default', ['sass', 'lint', 'transpile', 'inject', 'serve']);
// Replaced then with an init task that runs tasks synchronously
gulp.task('default', ['init']);
