'use strict';

module.exports = function (grunt) {

    require('jit-grunt')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
      app: 'wp-content/themes/<%= appSlug %>',
      vendor: 'wp-content/themes/<%= appSlug %>/assets/vendor',

      /* 
       * grunt-sass: Compile Sass to CSS using node-sass
       * https://github.com/sindresorhus/grunt-sass
       */
      sass: {
          options: {
              sourceMap: false,
              outputStyle: 'expanded',
              includePaths: [
                '<%%= vendor %>',
                '<%%= vendor %>/foundation/scss'
              ]
          },
          dist: {
            files: [{
              expand: true,
              cwd: '<%%= app %>/assets/scss/',
              src: ['{,*/}*.scss'],
              dest: '<%%= app %>/',
              ext: '.css'
            }]
          }
      },

      /* 
       * PostCSS: CSS Transformer via JS plugins
       * https://github.com/nDmitry/grunt-postcss
       */
      postcss: {
        serve: {
          options: {
            processors: [
              /* 
               * Autoprefixer: Add vendor prefixes using caniuse.com
               * https://github.com/postcss/autoprefixer
               */
              require('autoprefixer')({
                browsers: ['last 2 versions', 'ie >= 9']
              })
            ]
          },
          files: [{
              expand: true,
              cwd: '<%%= app %>/',
              src: '*.css',
              dest: '<%%= app %>/'
          }]
        },
        dist: {
          options: {
            processors: [
              require('autoprefixer')({
                browsers: ['last 2 versions', 'ie >= 9']
              }),
              /* 
               * CSS Nano: Modular minifier
               * https://github.com/ben-eb/cssnano
               */
              require('cssnano')()
            ]
          },
          files: [{
              expand: true,
              cwd: '<%%= app %>/',
              src: '*.css',
              dest: '<%%= app %>/'
          }]
        }
      },

      /*
       * JSHint: Validate JavaScript files
       * https://github.com/gruntjs/grunt-contrib-jshint
       */
      jshint: {
          options: {
            node: true,
            browser: true,
            esnext: true,
            bitwise: true,
            camelcase: false,
            curly: true,
            eqeqeq: true,
            immed: true,
            indent: 2,
            latedef: true,
            newcap: true,
            noarg: true,
            quotmark: 'single',
            regexp: true,
            undef: true,
            unused: true,
            strict: true,
            trailing: true,
            smarttabs: true,
            "globals": {
              "jQuery": false,
              "$": false
            }
          },
          grunt: [
            'Gruntfile.js',
          ],
          scripts: [
            '<%%= app %>/assets/js/app.js'
          ]
      },

      /*
       * JSDoc: Generate JS documentation
       * https://github.com/gruntjs/grunt-contrib-concat
       */
      jsdoc : {
        options: {
            destination: '<%%= app %>/assets/docs/js'
        },
        dist : {
            src: '<%%= app %>/assets/js/**/*.js'
        }
      },

      /*
       * Concat: Concatenate JS files
       * https://github.com/gruntjs/grunt-contrib-concat
       */
      concat: {
        dist: {
          src: [
                // Libraries
                '<%%= vendor %>/jquery/dist/jquery.js',
                '<%%= vendor %>/fastclick/lib/fastclick.js',

                  // include Foundation components separately
                '<%%= vendor %>/foundation/js/foundation.js',

                // Custom functions
                '<%%= app %>/assets/js/app.js'
               ],
          dest: '<%%= app %>/script.js',
        },
      },

      /*
       * Uglify: Minify JS files
       * https://github.com/gruntjs/grunt-contrib-uglify
       */
      uglify: {
        options: {
          preserveComments: false,
          mangle: true
        },
        dist: {
          files: {
            '<%%= app %>/script.js': ['<%%= app %>/script.js']
          }
        }
      },

      /*
       * Watch: Run tasks whenever watched files change
       * https://github.com/gruntjs/grunt-contrib-watch
       */
      watch: {
        options: {
          livereload: 35729
        },
        sass: {
          files: '<%%= app %>/assets/scss/**/*.scss',
          tasks: ['sass', 'postcss:serve']
        },
        php: {
          files: ['<%%= app %>/**/*.php']
        },
        gruntfile: {
          files: 'Gruntfile.js',
          tasks: ['jshint:grunt']
        },
        scripts: {
          files: '<%%= app %>/assets/js/app.js',
          tasks: ['jshint:scripts', 'concat']
        }
      }

    });

    // Development
    grunt.registerTask('serve', [
        'jshint',
        'concat',
        'sass',
        'postcss:serve',
        'watch'
    ]);

    // Build
    grunt.registerTask('build', [
        'jshint',
        'jsdoc',
        'concat',
        'uglify',
        'sass',
        'postcss:dist',
        'cssnano'
    ]);

    // Docs
    grunt.registerTask('docs', [
        'jsdoc',
    ]);

    // Default
    grunt.registerTask('default', [
        'build',
    ]);

};