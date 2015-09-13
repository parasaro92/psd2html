module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        options: {                       // Target options 
          style: 'expanded'
        },
        files: {                         // Dictionary of files 
          'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss',       // 'destination': 'source' 
          'assets/stylesheets/land.css': 'assets/stylesheets/src/land.scss'           // 'destination': 'source' 
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass']
      }
    }  
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'watch']);
};