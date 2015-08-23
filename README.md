# generator-microcebus

> [Yeoman](http://yeoman.io/) generator that scaffolds an opinionated WordPress app


## Features

- A [modified version](https://github.com/ikayzo/_s) of [\_s \(underscores\)](https://github.com/automattic/_s) WordPress starter theme
- [Foundation framework](http://foundation.zurb.com/) for responsive web design
- [GruntJS](http://gruntjs.com/) for build task automation
  - [Sass](http://sass-lang.com/) for CSS preprocessing
  - [Autoprefixer](https://github.com/postcss/autoprefixer) for prefix-free CSS3
  - [Watch](https://github.com/gruntjs/grunt-contrib-watch) for livereloading of CSS/JS assets
  - [JSHint](https://github.com/gruntjs/grunt-contrib-jshint) for JavaScript linting / validation
- [Hologram](http://trulia.github.io/hologram/) for generating theme CSS style guides  

Maintainer: [Mike King](https://github.com/micjamking)

## Requirements
[NodeJS](http://nodejs.org/) & [Yeoman](http://yeoman.io/) are obviously required. Additionally, this package requires the following  packages:

- [WP-CLI](http://wp-cli.org/) command line interface for WordPress
- [Bundler](http://bundler.io/) for managing ruby dependencies (necessary evil to support [hologram style guides](http://trulia.github.io/hologram/))

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

Install additional ruby dependencies
```
$ bundle
```
_*Or `gem install hologram` (if you don't have bundler installed.)_

<!-- ## Contributing

See the [contribution docs](https://github.com/yeoman/yeoman/blob/master/contributing.md).

When submitting an issue, please follow [the
guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission).
Especially important is to make sure Yeoman is up-to-date, and providing the
command or commands that cause the issue. -->

## Note
Only tested on OSX 10.10.4

## License

MIT © Mike King [mike@ikayzo.com](mailto:mike@ikayzo.com)
