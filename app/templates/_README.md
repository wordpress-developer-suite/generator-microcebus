# <%= appName %>
> Custom WordPress theme

## Setup & Installation:

### Install WordPress core, theme & plugins
_(Requires [wp-cli](http://wp-cli.org/) to download WordPress)_
```
$ git clone
$ cd <%= appSlug %> && wp core download
$ npm install && bower install
$ sh scripts/download-plugins.sh
```

### Sync database

**1. Create database in MySQL/phpMyAdmin**

**2. Install [wordpress-db-sync](https://github.com/micjamking/wordpress-db-sync)**
```
$ cd db/ && git clone git@github.com:micjamking/wordpress-db-sync.git
$ cp -R wordpress-db-sync/* ./
$ rm -rf wordpress-db-sync/
```
**3. Configure pull.sh, push.sh, & update.sql with your database name, user, and password**
- See [usage instructions](https://github.com/micjamking/wordpress-db-sync#usage) for wordpress-db-sync for more details
```
$ sh db/pull.sh
```
_(Run from top-level directory.)_

**4. Run through quick install in browser**

### Sync database

**1. Create database in MySQL/phpMyAdmin**

**2. Install [wordpress-db-sync](https://github.com/micjamking/wordpress-db-sync)**
```
$ cd db/ && git clone git@github.com:micjamking/wordpress-db-sync.git
$ cp -R wordpress-db-sync/* ./
$ rm -rf wordpress-db-sync/
```
**3. Configure pull.sh, push.sh, & update.sql with your database name, user, and password**
- See [usage instructions](https://github.com/micjamking/wordpress-db-sync#usage) for wordpress-db-sync for more details
```
$ sh db/pull.sh
```
_(Run from top-level `wordpress/` directory.)_

**4. Run through quick install in browser**

## Development
```
$ grunt serve
```

## Deployment
```
$ grunt build
```
