module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        css_combo: {
            options: {
                debug: false,
                compress: false
            },
            css: {
                files: {'src/style.css': ['src/css/bundle.css']}
            }
        },

        cssmin: {
            css: {
                files: [{
                    src: 'src/style.css',
                    dest: 'build/style.css'
                }]
            }
        },
        copy: {
            // img: {
            //     files: [{
            //         expand: true,
            //         cwd: 'src/img',
            //         src: '**/*',
            //         dest: 'build/img'
            //     }]
            // },
            font: {
                files: [{
                    expand: true,
                    cwd: 'src/css/font',
                    src: '**/*',
                    dest: 'build/css/font'
                }]
            }

        },

        watch: {
            options: {
                livereload: true,
                debounceDelay: 1000
            },
            css: {
                files: 'src/css/*.css',
                tasks: ['css_combo']
            },
            cssmin: {
                files: 'src/style.css',
                tasks: ['cssmin']
            },
            copy: {
                files: ['src/img/**/*', 'src/css/font/*'],
                tasks: ['copy']
            }
        }


    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-css-combo');

    // Default task(s).
    grunt.registerTask('default', ['css_combo', 'cssmin', 'copy']);

};
