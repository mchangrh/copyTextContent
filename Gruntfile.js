module.exports = function (grunt) {
  grunt.initConfig({
    compress: {
      chrome: {
        options: { archive: 'dist/chrome.zip' },
        files: [
          { expand: true, cwd: 'chrome', src: ['**'], dest: '/'},
          { src: ['icons/**'], dest: '/' }
        ]
      },
      chromeLite: {
        options: { archive: 'dist/chrome-lite.zip' },
        files: [
          { expand: true, cwd: 'chrome-lite', src: ['**/*'], dest: '/'},
          { src: ['icons/**'], dest: '/' }
        ]
      },
      firefox: {
        options: { archive: 'dist/firefox.zip' },
        files: [
          { expand: true, cwd: 'firefox', src: ['**/*'], dest: '/'},
          { src: ['icons/**'], dest: '/' }
        ]
      }
    }
  })
 
  grunt.loadNpmTasks('grunt-contrib-compress')
  grunt.registerTask("default", ["compress"])
}