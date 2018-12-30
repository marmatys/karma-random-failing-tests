const karmaJasmineSeedReporter = require('./scripts/karma-jasmine-seed-reporter');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js'
    ],
    exclude: [
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-spec-reporter'),
      karmaJasmineSeedReporter
    ],
    client: {
      jasmine: {
        random: true,
        seed: 95321
      }
    },
    preprocessors: {
    },
    reporters: ['spec', 'jasmine-seed'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  })
};
