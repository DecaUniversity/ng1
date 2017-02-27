"use strict";


const gulp = require('gulp');
const injector = require('gulp-inject');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const gutil = require('gulp-util');
const sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src("app/**/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("app/dist/styles"))
		.pipe(browserSync.stream());
});


gulp.task('inject', () => {
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
	
	let injectSrc = gulp.src([
		'!app/lib/', '!app/lib/**',
		'app/styles/**/*.css',
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

// gulp.task('js-watch', ['lint', 'transpile', 'inject'], () => {
// 	browserSync.reload();
// });

gulp.task('js-watch', ['inject'], () => {
	browserSync.reload();
});

gulp.task('html-watch', ['inject'], () => {
	gutil.log("task html-watch");
	browserSync.reload();
});

gulp.task('serve', () => {
	browserSync.init({
		server: {
			baseDir: "app"
		}
	});
	
	gulp.watch(['!app/lib', 'app/**/*.js'], ['js-watch']);
	gulp.watch(['!app/lib', 'app/**/*.scss'], ['sass']);
	gulp.watch(['!app/lib', 'app/**/*.html'], ['html-watch']);
	
});

gulp.task('default', ['sass', 'inject', 'serve']);
