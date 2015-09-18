module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          "dist/css/style.css": "dist/sass/style.scss" // destination file and source file
        }
      }  
    },

     uglify: {
                build: {
                    src: 'dist/js/countdown.js',
                    dest: 'dist/js/countdown.min.js'
                }
        },

    watch: {
      styles: {
        files: ['dist/sass/*.scss'], // which files to watch
        tasks: ['sass'],
        options: {
          nospawn: true
        }
      }

    }

  });

  grunt.registerTask('default', ['sass', 'uglify', 'watch']);


}