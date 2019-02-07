module.exports = (db) => {

	return [
		(req, res) => {

			var alumni = {
				'name': req.query.name,
				'phone': req.query.phone,
				'email': req.query.email
			};
			db.Alumnis.create(alumni)
			.then(al => {
				res.send(al);
			});
		}
	];

	// res.send('list events');
};