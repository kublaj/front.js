// compile everything into package.js
var gulp = require('gulp')
var notify = require('gulp-notify')
var condition = require('gulp-if')

var browserify = require('browserify')
var globify = require('require-globify')
var compiler = require('google-closure-compiler-js').gulp()
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')

var options = {
  base: './',
  input: 'front.js',
  inputMod: 'modules/*.js',
  output: 'front.package.js',
  outputMin: 'front.package.min.js',
  notification: {
    title: 'Front.js compilation',
    success: 'Compiled successfully',
    error: 'Error: <%= error.message %>',
  },
}

gulp.task('compile', function () {
  var success = true

  return browserify({
    entries: options.base + options.input,
    debug: true,
    transform: [globify]
  })
    .bundle()
    .on('error', function (error) {
      notify.onError({
        title: options.notification.title,
        message: options.notification.error,
      })(error)
      success = false
    })
    .pipe(source(options.output))
    .pipe(gulp.dest(options.base))
    .pipe(buffer())
    .pipe(compiler({
      compilationLevel: 'SIMPLE',
      warningLevel: 'QUIET',
      jsOutputFile: options.outputMin,
      languageIn: 'ES5',
      createSourceMap: false,
    }))
    .pipe(gulp.dest(options.base))
    .pipe(condition(success, notify({
      title: options.notification.title,
      message: options.notification.success,
    })))
})

gulp.task('watch', function () {
  gulp.watch([
    options.base + options.input,
    options.base + options.inputMod,
  ], ['compile'])
})

gulp.task('default', ['compile', 'watch'])
