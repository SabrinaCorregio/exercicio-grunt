module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'src/styles/main.css': 'src/styles/main.less'  // Compila LESS para CSS
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/styles',  // Pasta do CSS
                    src: ['main.css', '!*.min.css'],
                    dest: 'src/styles',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'src/scripts/main.min.js': ['src/scripts/main.js']  // Minifica o JavaScript
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.min.html': 'index.html'
                }
            }
        },
        watch: {
            css: {
                files: ['src/styles/*.less'],
                tasks: ['less', 'cssmin']
            },
            js: {
                files: ['src/scripts/*.js'],
                tasks: ['uglify']
            },
            html: {
                files: ['index.html'],
                tasks: ['htmlmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'htmlmin', 'watch']);
};