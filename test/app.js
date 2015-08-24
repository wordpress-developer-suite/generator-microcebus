'use strict';

var path    = require('path');
// var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('microcebus', function(){

  before(function(done){
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        dbName: 'test',
        dbUser: 'test',
        dbPass: 'test'
      })
      .on('end', done);
  });

  // before(function(){
  //   this.what = 2;
  // });
  //
  // it('should equal 4', function(){
  //   assert.equal(4, this.what*2);
  // });

  // describe('scaffolding app', function(){
  //
  //   it('should create package files', function(){
  //     assert.file([
  //       'bower.json',
  //       '.bowerrc',
  //       '.gitignore',
  //       'Gruntfile.js',
  //       'hologram_config.yml',
  //       'package.json',
  //       'README.md',
  //       '.editorconfig',
  //       'Gemfile',
  //       '.jshintrc',
  //       'plugins'
  //     ]);
  //   });
  // });
  //
  // describe('installing foundation', function(){
  //
  //   it('should add the Foundation dependency', function(){
  //     assert.fileContent('bower.json', 'foundation');
  //   });
  //
  //   it('should add Foundation paths to Gruntfile.js', function(){
  //     assert.fileContent('Gruntfile.js', 'foundation');
  //   });
  // });
  //
  // describe('installing sass', function(){
  //
  //   it('should add the Grunt plugin', function(){
  //     assert.fileContent('package.json', 'sass');
  //   });
  //
  //   it('should add the Grunt task', function(){
  //     assert.fileContent('Gruntfile.js', 'sass');
  //   });
  // });
});
