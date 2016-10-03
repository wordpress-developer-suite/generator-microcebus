'use strict';

var helpers = helpers || {};

helpers.SETTINGS = {
  DEFAULT_THEME_URI: 'https://github.com/ikayzo/_s.git'
};

// Slugify text
helpers.slugify = function(string){
  return string.toString().toLowerCase()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of string
    .replace(/-+$/, '');      // Trim - from end of string
};

helpers.capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = helpers;
