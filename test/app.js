'use strict';

var path    = require('path');
var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('microcebus:app', function(){

  before(function(done){
    helpers.run(path.join(__dirname, '../app'))
      .on('end', done);
  });

  it('creates expected files', function(){
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

  it('adds the Foundation dependency', function(){
    assert.fileContent('bower.json', 'foundation');
  });

  it('doesn\'t explicitly add the jQuery dependency', function(){
    assert.noFileContent('bower.json', 'jquery');
  });

  it('adds Foundation paths to Gruntfile.js', function(){
    assert.fileContent('Gruntfile.js', 'foundation');
  });

  it('adds the Grunt plugin', function(){
    assert.fileContent('package.json', 'sass');
  });

  it('adds the Grunt task', function(){
    assert.fileContent('Gruntfile.js', 'sass');
  });
});
