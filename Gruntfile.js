module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    sass: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "dist/css/style.css": "dist/sass/styles.scss" // destination file and source file
        }
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

  grunt.registerTask('default', ['sass', 'watch']);
  
};