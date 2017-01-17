/*
 * grunt-aws-api-swagger-export
 * 
 *
 * Copyright (c) 2017 Jason Pecsek
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }

    // Configuration to be run (and then tested).
    aws_api_swagger_export: {

		options: {
			auth: {
				accessKeyId: "XXXXXXX",
				secretAccessKey: "XXXXXXX",
				region: "XXXXXXX",
				apiVersion: '2015-07-09' //optional
			},
			path: {
					
				exportType : 'swagger', // required 
				// Each API is assigned an ID. Found in API Gateway Console header
				// by selecting API.
				restApiId : 'XXXXXXX', // required 
				stageName : 'XXXXXXX', // required 
				accepts : 'application/json'
			},
			output: {
				fileName: 'XXX.json'
			}
		}
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  
  grunt.registerTask('default', ['aws_api_swagger_export']);

};
