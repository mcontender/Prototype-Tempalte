module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		watch: {
			scripts: {
				files: ['**/*.js', 'scss/*.scss'],
				tasks: ['jshint', 'compass'],
				options: {
					spawn: false,
				},
			},
		},
		jshint: {
			all: ['js/*.js']
		},
		compass: { // Task 
			// dist: { // Target 
			// 	options: { // Target options 
			// 		sassDir: 'sass',
			// 		cssDir: 'css',
			// 		environment: 'production'
			// 	}
			// },
			dev: { // Another target 
				options: {
					sassDir: 'scss',
					cssDir: 'css'
				}
			}
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	// Default task(s).
	grunt.registerTask('default', ['uglify']);
	// grunt.registerTask('watch', ['uglify', 'watch']);


};