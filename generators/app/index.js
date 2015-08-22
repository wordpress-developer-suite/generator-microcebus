'use strict';
var chalk  = require('chalk');
var util   = require('util');
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
    name: 'themeDesc',
    message: 'Description',
    default: 'A Custom WordPress theme created for X by John Doe'
  }];

  this.prompt(prompts, function(props){
    this.props = props;
    done();
  }.bind(this));
};

Generator.prototype.configuring = function(){
  var done = this.async();

  github(
    this.props.githubUser,
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
  templates: function(){
    var userinfo = {
      appName: this.props.themeName,
      appSlug: this.props.themeSlug,
      appDesc: this.props.themeDesc,
      authorName: this.realname,
      authorEmail: this.email,
      authorURL: this.githubUrl
    };

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      userinfo
    );
    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'),
      userinfo
    );
    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore'),
      userinfo
    );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      userinfo
    );
    this.fs.copyTpl(
      this.templatePath('_hologram_config.yml'),
      this.destinationPath('hologram_config.yml'),
      userinfo
    );
  },

  staticFiles: function () {
    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('jshintrc'),
      this.destinationPath('.jshintrc')
    );
    this.fs.copy(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    );
    this.fs.copy(
      this.templatePath('Gemfile'),
      this.destinationPath('Gemfile')
    );
    this.fs.copy(
      this.templatePath('plugins'),
      this.destinationPath('plugins')
    );
  }
};

Generator.prototype.install = function(){
    this.installDependencies();
};
