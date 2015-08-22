'use strict';

var GitHubAPI = require('github');
var url       = require('url');

module.exports = (function(env){

  this.proxy = env.http_proxy  ||
               env.HTTP_PROXY  ||
               env.https_proxy ||
               env.HTTPS_PROXY ||
               null;

  this.options = {
    version: '3.0.0'
  };

  if (this.proxy) {
    var proxyUrl = url.parse(this.proxy);

    this.options.proxy = {
      host: proxyUrl.hostname,
      port: proxyUrl.port
    };
  }

  this.github = new GitHubAPI(this.options);

  if (env.GITHUB_TOKEN) {
    this.github.authenticate({
      type: 'oauth',
      token: env.GITHUB_TOKEN
    });
  }

  return function (name, cb, log) {
    this.github.user.getFrom({
      user: name
    }, function (err, res) {
      if (err) {
        log.error('Cannot fetch your github profile. Make sure you\'ve typed it correctly.');
        res = {
          name: '',
          email: '',
          html_url: ''
        };
      }

      cb(JSON.parse(JSON.stringify(res)));
    });
  };
})(process.env);
