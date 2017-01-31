# aws-api-swagger-export
Grunt plugin to export AWS Swagger file through API call

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-aws-api-swagger-export --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-aws-api-swagger-export');
```

## The "aws_api_swagger_export" task

### Overview
In your project's Gruntfile, add a section named `aws_api_swagger_export` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  		aws_api_swagger_export: {
			options: {
				auth: {
					accessKeyId: "xxxxxxxxxxxxx",
					secretAccessKey: "xxxxxxxxxxxxxxxxxxxxx",
					region: "us-east-1",
					//version ref: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html
					apiVersion: '2015-07-09' //optional
				},
				path: {						
					exportType : 'swagger', // required 
					// Each API is assigned an ID. Found in API Gateway Console header
					// by selecting API. 
					restApiId : 'xxxxxxxxxxx', // required 
					stageName : 'dev', // required 
					accepts : 'application/json'
				},
				output: {
					fileName: 'api.json'
				}
			}
	    }

});
```

grunt.registerTask('default', ['aws_api_swagger_export']);

```

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
