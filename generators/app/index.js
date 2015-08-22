'use strict';
var chalk  = require('chalk');
var util   = require("util");
var yeoman = require('yeoman-generator');
var yosay  = require('yosay');
var github = require('./github');

// Slugify text
var slugify = function(string){
  return string.toString().toLowerCase()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of string
    .replace(/-+$/, '');      // Trim - from end of string
};

var capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

var Generator = module.exports = function(){
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.prompting = function(){
  var done = this.async();

  // Have Yeoman greet the user.
  this.log(yosay(
    'Welcome to the premium ' + chalk.red('Microcebus') + ' generator!'
  ));

  this.log('Create your underscores based theme:');

  var prompts = [{
    name: 'githubUser',
    message: 'Would you mind telling me your username on GitHub?',
    default: 'someuser'
  },{
    type: 'input',
    name: 'themeName',
    message: 'Theme Name',
    default: capitalize(this.appname)
  },
  {
    type: 'input',
    name: 'themeSlug',
    message: 'Theme Slug',
    default: this.appname
  },
  {
    type: 'input',
    name: 'author',
    message: 'Author',
    default: 'John Doe'
  },
  {
    type: 'input',
    name: 'authorURI',
    message: 'Author URI',
    default: 'http://johndoe.io'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description',
    default: 'A Custom WordPress theme created for X by John Doe'
  }];

  this.prompt(prompts, function (props) {
    this.props = props;
    // To access props later use this.props.someOption;

    done();
  }.bind(this));
};

Generator.prototype.configuring = function(){
  var done = this.async();

  github(
    this.githubUser,
    function(res){
      this.realname  = res.name;
      this.email     = res.email;
      this.githubUrl = res.html_url;
      done();
    }.bind(this),
    this.log
  );
};

Generator.prototype.writing = {
  app: function(){
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),{

      }
    );
    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'),{
        
      }
    );
    this.fs.copy(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    );
  },

  projectfiles: function () {
    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('jshintrc'),
      this.destinationPath('.jshintrc')
    );
  }
};

Generator.prototype.install = function(){
    this.installDependencies();
};
