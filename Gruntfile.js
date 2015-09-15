module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        options: {                       // Target options 
          style: 'expanded'
        },
        files: {                         // Dictionary of files 
          'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss',       // 'destination': 'source' 
          'assets/stylesheets/land.css': 'assets/stylesheets/src/land.scss',           // 'destination': 'source' 
          'assets/stylesheets/about.css': 'assets/stylesheets/src/about.scss',
          'assets/stylesheets/how_works.css': 'assets/stylesheets/src/how_works.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },
    // concat: {
    //   css: {
    //     src: ['assets/stylesheets/common.css', 'assets/stylesheets/src/land.css'],
    //     dest: 'assets/stylesheets/app.css',
    //   },
    // },
    cssmin: {
      target: {
        files: {
          'assets/stylesheets/app.min.css':
          [
           'assets/stylesheets/common.css', 
           'assets/stylesheets/land.css', 
           'assets/stylesheets/about.css'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
};