module.exports = function(grunt) {
  grunt.initConfig({
  sass: {                              // Task 
    dist: {                            // Target 
      options: {                       // Target options 
        style: 'expanded'
      },
      files: {                         // Dictionary of files 
        'styles.css': 'styles.scss'       // 'destination': 'source' 
      }
    }
  },
  watch: {
    css: {
      files: ['*.scss'],
      tasks: ['sass']
    }
  },
  'http-server': {
    'dev': {
      root: './',
      port: 8282, 
      host: "0.0.0.0", 
      showDir : true,
      autoIndex: true, 
            // server default file extension 
            ext: "html",
            // run in parallel with other tasks 
            runInBackground: false,
            // specify a logger function. By default the requests are 
            // sent to stdout. 
            logFn: function(req, res, error) { },
            /// Use 'https: true' for default module SSL configuration 
            /// (default state is disabled) 
        }
    }  
  });

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-http-server');
grunt.registerTask('default', ['sass', 'watch']);
};