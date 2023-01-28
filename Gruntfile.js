module.exports = function (grunt) {
  grunt.initConfig({
    compress: {
      chromeElem: {
        options: { archive: 'dist/chrome-elem.zip' },
        files: [
          { expand: true, cwd: 'elem', src: ['**'], dest: '/'},
          { src: ['icons/**'], dest: '/' }
        ]
      },
      chromeSelect: {
        options: { archive: 'dist/chrome-select.zip' },
        files: [
          { expand: true, cwd: 'select', src: ['**/*'], dest: '/'},
          { src: ['icons/**'], dest: '/' }
        ]
      },
      firefox: {
        options: { archive: 'dist/firefox.zip' },
        files: [
          { expand: true, cwd: 'ff', src: ['**/*'], dest: '/'},
          { src: ['icons/**'], dest: '/' }
        ]
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.registerTask("default", ["compress"])
};