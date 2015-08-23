'use strict';

var path    = require('path');
var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('microcebus', function(){

  beforeEach(function(done){
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withPrompts({dbUser: 'test', dbPass: 'test'})
      .on('end', done);
  });

  describe('app', function(){
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
  });

  describe('foundation', function(){
    it('adds the Foundation dependency', function(){
      assert.fileContent('bower.json', 'foundation');
    });

    it('doesn\'t explicitly add the jQuery dependency', function(){
      assert.noFileContent('bower.json', 'jquery');
    });

    it('adds Foundation paths to Gruntfile.js', function(){
      assert.fileContent('Gruntfile.js', 'foundation');
    });
  });

  describe('sass', function(){
    it('adds the Grunt plugin', function(){
      assert.fileContent('package.json', 'sass');
    });

    it('adds the Grunt task', function(){
      assert.fileContent('Gruntfile.js', 'sass');
    });
  });
});
