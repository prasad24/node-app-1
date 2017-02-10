var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('lint', function() {
    gulp.src('./src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish, { verbose: true }))
        .pipe(jshint.reporter('fail'))
})

gulp.task('develop', function() {

    var nodemonOptions = {
        script: 'src/app.js',
        env: {
            PORT: 5000
        },
        ext: 'js html css ejs',
        ignore: ['node_modules', 'public/lib'],
        tasks: ['lint']
    }

    var stream = nodemon(nodemonOptions);

    stream
        .on('restart', function() {
            console.log('restarted!')
        })
        .on('crash', function() {
            console.error('Application has crashed!\n')
            stream.emit('restart', 10) // restart the server in 10 seconds 
        });
});