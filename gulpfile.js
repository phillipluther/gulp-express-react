'use_strict';
var
    // gulp and gulp-related
    gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    less        = require('gulp-less'),
    livereload  = require('gulp-livereload'),
    minifyCss   = require('gulp-minify-css'),
    sourcemaps  = require('gulp-sourcemaps'),

    // path configuration
    paths = {
        scripts: {
            sources: [
                './src/scripts/**/*.js'
            ],
            dest: './static/js/',
            buildFile: 'scripts-bundle.js'
        },
        styles: {
            sources: [
                './src/styles/**/*.less'
            ],
            dest: './static/css/',
            buildFile: 'styles-bundle.cs'
        }
    };

// our error handler; a standard error-object-to-text logger; expand this as
// needed with fancy logging, etc.
function handleError(err) {
    console.log('---> Error:' + err.toString());
    this.emit('end');
}

// a standardized task for concatenating and compiling LESS assets from the 
// given source to the given build file.
function lessTask(sources, buildFile) {
    return gulp.src(sources)
        .pipe(concat(buildFile))
        .pipe(less())
            .on('error', handleError)
        .pipe(livereload());
}


//
// ============================================================================
// LESS Compilation
//
gulp.task('less:dev', function() {
    return lessTask(paths.styles.sources, paths.styles.buildFile)
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('less:prod', function() {
    return lessTask(paths.styles.sources, paths.styles.buildFile)
        .pipe(sourcemaps.init())
        .pipe(minifyCss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dest));
});
