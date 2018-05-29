module.exports = function(config){
  config.set({
    frameworks: ['browserify', 'jasmine'],
    files: [
      'src/**/*.js',
      'test/**/*_spec.js'
    ],
    preprocessors: {
      'test/**/*.js': ['jshint', 'browserify', 'coverage'],
      'src/**/*.js': ['jshint', 'browserify']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/'
    },
    browsers: ['PhantomJS'],
    browserif: {
      debug: true
    },
    bundleDelay: 2000
  })
}