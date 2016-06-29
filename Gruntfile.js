/**
 * Created by Vale on 28/06/16.
 */

module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            loose: "all"
                        }]
                    ],
                    browserifyOptions: {
                        debug: true
                    }
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "./js/appBundle.js": ["./app/app.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["./app/**/*.js"],
                tasks: ["browserify", "uglify"]
            }
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                },
                files: {
                    './js/appBundle.min.js': ["./js/appBundle.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify", "uglify"]);
};