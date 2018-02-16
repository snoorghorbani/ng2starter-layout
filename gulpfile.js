var gulp = require('gulp'),
	gulpCopy = require('gulp-copy'),
	inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('copy-src', function() {
	return gulp.src('src/**/*').pipe(gulpCopy('dist/', { prefix: 1 }));
});

gulp.task('inline-templates', function() {
	return gulp
		.src('dist/**/*.ts')
		.pipe(inlineNg2Template({ useRelativePaths: true, indent: 0, removeLineBreaks: true }))
		.pipe(gulp.dest('dist'));
});

gulp.task('default',  gulp.series([ 'copy-src', 'inline-templates' ]));
