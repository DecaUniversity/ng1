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
		'app/**/*component.js',
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


gulp.task('default', ['init']);
