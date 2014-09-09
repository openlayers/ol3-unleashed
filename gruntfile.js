var path = require('path');


/** @param {Object} grunt Grunt. */
module.exports = function(grunt) {

  var build = path.join('.grunt', 'self');

  grunt.initConfig({
    copy: {
      local: {
        // local files with no pre-processing
        expand: true,
        src: ['index.html', 'img/**/*.*', 'theme/**/*.*', '!theme/**/*.less'],
        dest: build
      },
      examples: {
        // all example files except jade
        expand: true,
        src: ['examples/**/*.*', '!**/*.jade'],
        dest: build
      },
      other: {
        // 3rd party componnets js and css
        expand: true,
        src: ['bower_components/**/*.js', 'bower_components/**/*.css'],
        dest: build
      }
    },
    jade: {
      options: {
        pretty: true
      },
      examples: {
        // all example templates except those in "_" prefixed directories
        expand: true,
        src: ['examples/**/*.jade', '!**/_*/**/*.*'],
        dest: build,
        ext: '.html'
      }
    },
    less: {
      all: {
        expand: true,
        src: ['theme/**/*.less'],
        dest: build,
        ext: '.css'
      }
    },
    watch: {
      local: {
        files: '<%= copy.local.src %>',
        tasks: ['newer:copy:local']
      },
      examples: {
        files: '<%= copy.examples.src %>',
        tasks: ['newer:copy:examples']
      },
      other: {
        files: '<%= copy.other.src %>',
        tasks: ['newer:copy:other']
      },
      less: {
        files: '<%= less.all.src %>',
        tasks: ['newer:less:all']
      },
      jade: {
        files: ['examples/**/*.jade'],
        tasks: ['newer:jade']
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: build
        }
      }
    },
    'gh-pages': {
      options: {
        base: build
      },
      src: '**/*'
    },
    clean: {
      all: build
    }
  });

  // contrib tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 3rd party tasks
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-newer');

  // local tasks
  grunt.registerTask('build', ['copy', 'jade', 'less']);
  grunt.registerTask('start', ['build', 'connect', 'watch']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);
  grunt.registerTask('default', 'build');

};

