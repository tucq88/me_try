'use strict'

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                     'style/css/style.css' : 'style/sass/style.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                cascade: false
            },
            dist: {
                files: [{
                    'style/css/style.css': 'style/css/style.css'
                }]
            }
        },

        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['index.html'],
            },
            sass: {
                files: ['style/sass/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    livereload: false
                },
            },
             css: {
                files: ['style/css/*.css'],
            }
        }
    });

    //Load plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Register task
    grunt.registerTask('default', ['sass', 'autoprefixer']);
    grunt.registerTask('serve', ['sass', 'watch']);
}
