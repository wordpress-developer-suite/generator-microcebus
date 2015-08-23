'use strict';

var path    = require('path');
var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('microcebus:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .on('end', done);
  });

  it('creates expected files', function () {
    assert.file([
      'bower.json',
      '.bowerrc',
      '.gitignore',
      'Gruntfile.js',
      'hologram_config.yml',
      'package.json',
      'README.md',
      '.editorconfig',
      'Gemfile',
      '.jshintrc',
      'plugins'
    ]);
  });
});
