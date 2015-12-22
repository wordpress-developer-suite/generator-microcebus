'use strict';

module.exports = function (grunt) {

    require('jit-grunt')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
      app: 'wp-content/themes/<%= appSlug %>',
      vendor: 'wp-content/themes/<%= appSlug %>/assets/vendor',

      // CSS | Process SCSS files
      sass: {
          options: {
              sourceMap: false,
              outputStyle: 'expanded',
              includePaths: [
                '<%= vendor %>',
                '<%= vendor %>/foundation/scss'
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

      // Add vendor prefixes
      postcss: {
        options: {
          processors: [
            require('autoprefixer')({browsers: ['last 2 versions']})
          ]
        },
        dist: {
          files: [{
              expand: true,
              cwd: '<%%= app %>/',
              src: '{,*/}*.css',
              dest: '<%%= app %>/'
          }]
        }
      },

      // Minify CSS
      cssmin: {
        target: {
          files: {
            '<%%= app %>/style.css': '<%%= app %>/style.css'
          }
        }
      },

      // JS | Concat js files
      concat: {
        dist: {
          src: [
                // jQuery
                '<%%= vendor %>/jquery/dist/jquery.js',

                // Foundation (include components separately)
                '<%%= vendor %>/foundation/js/foundation.js',

                // Libraries
                '<%%= vendor %>/fastclick/lib/fastclick.js',

                // Custom functions
                '<%%= app %>/assets/js/app.js'
               ],
          dest: '<%%= app %>/script.js',
        },
      },

      // Check js files for errors
      jshint: {
          options: {
            jshintrc: '.jshintrc'
          },
          grunt: [
            'Gruntfile.js',
          ],
          scripts: [
            '<%%= app %>/assets/js/app.js'
          ]
      },

      // Minify js files
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

      // Watch files for changes
      watch: {
        options: {
          livereload: 35729
        },
        sass: {
          files: '<%%= app %>/assets/scss/**/*.scss',
          tasks: ['sass', 'postcss']
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
        'postcss',
        'watch'
    ]);

    // Build
    grunt.registerTask('build', [
        'jshint',
        'concat',
        'uglify',
        'sass',
        'postcss',
        'cssmin'
    ]);

    // Default
    grunt.registerTask('default', [
        'build',
    ]);

};
