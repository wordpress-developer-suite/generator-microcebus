# generator-microcebus [![Build Status](https://travis-ci.org/micjamking/generator-microcebus.svg?branch=master)](https://travis-ci.org/micjamking/generator-microcebus)

> [Yeoman](http://yeoman.io/) generator that scaffolds an opinionated WordPress app


## Features

- A [modified version](https://github.com/ikayzo/_s) of [\_s \(underscores\)](https://github.com/automattic/_s) WordPress starter theme
- [Foundation framework](http://foundation.zurb.com/) for responsive web design
- [GruntJS](http://gruntjs.com/) for build task automation
  - [Sass](http://sass-lang.com/) for CSS preprocessing
  - [Autoprefixer](https://github.com/postcss/autoprefixer) for prefix-free CSS3
  - [CSSNano](https://github.com/ben-eb/cssnano) for minifying CSS files
  - [JSHint](https://github.com/gruntjs/grunt-contrib-jshint) for JavaScript linting / validation
  - [Concat](https://github.com/gruntjs/grunt-contrib-concat) for concatenating multiple JS files
  - [Uglify](https://github.com/gruntjs/grunt-contrib-uglify) for minifying JS files
  - [JSDoc](https://github.com/krampstudio/grunt-jsdoc) for generating JS documentation
  - [Watch](https://github.com/gruntjs/grunt-contrib-watch) for livereloading of CSS/JS assets
  - [ImageMin](https://github.com/gruntjs/grunt-contrib-imagemin) for minifying images

Maintainer: [Mike King](https://github.com/micjamking)

## Requirements
[NodeJS](http://nodejs.org/) & [Yeoman](http://yeoman.io/) are obviously required. Additionally, this package requires the following packages:

- [WP-CLI](http://wp-cli.org/) command line interface for WordPress

```
$ curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
$ chmod +x wp-cli.phar
$ sudo mv wp-cli.phar /usr/local/bin/wp
$ wp --info
```

## Getting started
Download the generator
```
$ npm install -g generator-microcebus
```
Run the generator
```
$ yo microcebus

     _-----_
    |       |    .--------------------------.
    |--(o)--|    |      Welcome to the      |
   `---------´   |   Microcebus WordPress   |
    ( _´U`_ )    |        generator!        |
    /___A___\    '--------------------------'
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? GitHub Username (for Theme Author info)?
? Theme Name:
? Theme Slug:
? Theme Description:
? Database Name:
? Database User:
? Database Password:
```
_*Make sure MySQL is started and the database username and password exist, otherwise WP CLI will choke during installation._

## Note
Only tested on OSX

## License

MIT © Mike King [mike@ikayzo.com](mailto:mike@ikayzo.com)
