module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    devserver: { server: {}, options: { port: 8000 } },
    concat: {
      dist: {
        src: ["js/random.js", "js/entity.js", "src/input.js"],
        dest: "build/<%= pkg.name %>.js",
      },
    },
    terser: {
      your_target: {
        src: ["build/<%= pkg.name %>.js"],
        dest: "dist/<%= pkg.name %>.min.js",
      },
    },
    uglify: {
      options: {
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        src: "build/<%= pkg.name %>.js",
        dest: "dist/<%= pkg.name %>.min.js",
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  //grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-terser");
  grunt.loadNpmTasks("grunt-devserver");

  grunt.registerTask("default", ["concat", "terser"]);
};
