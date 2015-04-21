// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'production' environment configuration object

module.exports = {
	db: 'mongodb://heroku_app35874489:my_mean123@ds061751.mongolab.com:61751/heroku_app35874489',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '1417415745227398',
		clientSecret: 'b6aa7bfe397ded77236bc19cb940ed03',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	google: {
		clientID: '841287647895-ncp8lkk60e0p5d5nkf2mpf4ddnlq2uim.apps.googleusercontent.com',
		clientSecret: 'hVOhLq45kOE4nQSwRuQg_4jn',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};