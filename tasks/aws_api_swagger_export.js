/*
 * grunt-aws-api-swagger-export
 * 
 *
 * Copyright (c) 2017 Jason Pecsek
 * Licensed under the MIT license.
 */

//Portions based on: https://www.npmjs.com/package/grunt-aws-apigateway

'use strict';

module.exports = function(grunt) {

	var fs = require('fs');
	var aws = require('aws-sdk');
	var async = require("async");

	grunt.registerTask('aws_api_swagger_export', function() {
		
		//Added to resolve REST call delay
		var done = this.async();
		
		// Options
        var options = this.options();
		
        // Load output file name
		var FILE_NAME = options.output.fileName;		
		grunt.file.defaultEncoding = 'utf8';

		//Load configuration
        aws.config.update({ accessKeyId: options.auth.accessKeyId, secretAccessKey: options.auth.secretAccessKey, region: options.auth.region, apiVersion: options.path.apiVersion });

		// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getExport-property
		var apigateway = new aws.APIGateway();
		
		var params = {	
				exportType : options.path.exportType, // required 
				// Each API is assigned an ID. Found in API Gateway Console header by selecting API.
				restApiId : options.path.restApiId, // required 
				stageName : options.path.stageName, // required 
				accepts : options.path.accepts
			};
		
		apigateway.getExport(params, function(err, data) {
			if (err) {
				console.log(err, err.stack); // an error occurred
				grunt.log.writeln('Request Error');
				done(false);
			} else {
				console.log(data); // successful response
				grunt.log.writeln('Request Success');
				write(data); // write to file
				
			}
		});

		function write(data) {
			// Parse the BODY from the response.
			var parsedBody = JSON.parse(data.body);
			// Stringify BODY, to be written to a file.
			var json = JSON.stringify(parsedBody);
			fs.writeFile(FILE_NAME, json, function(err) {
				if (err) {
					console.log(FILE_NAME + ' written');
					grunt.log.writeln('Write Error');
					return console.log(err);					
				} else {
					grunt.log.writeln('Write Success');
					done(); //Necessary for Grunt to complete
				}
			});
		}		

	});

};



	


