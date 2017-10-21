var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';
	locals.data = {
		test: 'asdasd'
	};

	view.on('init', function (next) {

		var q = keystone.list('Page').model.findOne({
			title: 'About'
		});

		q.exec(function (err, result) {
			locals.data.page = result;
			// console.log(result);
			next(err);
		});

	});

	// Render the view
	view.render('about');
};
