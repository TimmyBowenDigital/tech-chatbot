var express = require('express');
var secured = require('./../services/middleware/secured');
var router = express.Router();

//return user with userName passed with URL
router.get('/user', secured(), function(req, res, next) {
	const userInformtion = { _raw, _json, ...userProfile };
	let userInformation = req.user;
	res.render('user-profile', {
		userProfile: JSON.stringify(userProfile, null, 2),
		title: "'s Profile"
	});
});

module.exports = router;
