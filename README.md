# generator-microcebus

> Generate a WordPress project using _[our](http://ikayzo.com)_ opinionated workflow

Maintainer: [Mike King](https://github.com/micjamking)

## Requirements
This package depends on [WP-CLI](http://wp-cli.org/) which, if not already installed, will be installed up downloading this package. Below are the requirements for WP-CLI
- UNIX-like environment (OS X, Linux, FreeBSD, Cygwin); limited support in Windows environment
- PHP 5.3.2 or later
- WordPress 3.5.2 or later

## Getting started

- Install: `npm install -g generator-microcebus`
- Run: `yo microcebus`

_(Make sure MySQL is started and the database username and database password already exist.)_

## What do you get?

Scaffolds out a complete project directory structure for you:

    .
    ├── wp-admin
    ├── wp-content
    │   ├── plugins
    │   └── themes
    │       └── microcebus
    │           ├── assets
    │           ├── languages
    │           ├── layouts
    │           ├── lib
    │           ├── templates
    │           ├── 404.php
    │           ├── archive.php
    │           ├── codesniffer.ruleset.xml
    │           ├── comments.php
    │           ├── CONTRIBUTING.md
    │           ├── footer.php
    │           ├── functions.php
    │           ├── header.php
    │           ├── index.php
    │           ├── page.php
    │           ├── README.md
    │           ├── rtl.css
    │           ├── screenshot.png
    │           ├── search.php
    │           ├── sidebar.php
    │           ├── single.php
    │           └── style.css
    ├── wp-includes
    ├── .bowerrc
    ├── .editorconfig
    ├── .gitignore
    ├── .jshintrc
    ├── bower.json
    ├── Gemfile
    ├── hologram_config.yml
    ├── index.php
    ├── license.txt
    ├── package.json
    ├── plugins
    ├── readme.html
    ├── README.md
    ├── wp-activate.php
    ├── wp-blog-header.php
    ├── wp-comments-post.php
    ├── wp-config-sample.php
    ├── wp-config.php
    ├── wp-cron.php
    ├── wp-links-opml.php
    ├── wp-load.php
    ├── wp-login.php
    ├── wp-mail.php
    ├── wp-settings.php
    ├── wp-signup.php
    ├── wp-trackback.php
    └── xmlrpc.php


<!-- ## Contributing

See the [contribution docs](https://github.com/yeoman/yeoman/blob/master/contributing.md).

When submitting an issue, please follow [the
guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission).
Especially important is to make sure Yeoman is up-to-date, and providing the
command or commands that cause the issue. -->


## License

MIT © Mike King [mike@ikayzo.com](mailto:mike@ikayzo.com) and other contributors
