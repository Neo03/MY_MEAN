var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');

//Define routes module
module.exports = function(app){
	//Setup the 'signup' routes
	app.route('/signup')
		.get(users.renderSignup)
		.post(users.signup);
	//Setup the 'signin' routes	
	app.route('/signin')
		.get(users.renderSignin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/signin',
			failureFlash: true
		}));
	//Setup the Facebook OAuth routes
	app.get('/oauth/facebook', passport.authenticate('facebook', { failureRedirect: '/signin' }));
	app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

	//Setup the Google OAuth routes
	app.get('/oauth/google', passport.authenticate('google', {
		failureRedirect: '/signin',
		scope: [
		'https://www.googleapis.com/auth/userinfo.profile',
		'https://www.googleapis.com/auth/userinfo.email'
		]
	}));

	app.get('/oauth/google/callback', passport.authenticate('google', {
		failureRedirect: '/signin',
		successRedirect: '/'
	}));

	//Setup the 'signout' route
	app.get('/signout', users.signout);
};