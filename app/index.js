module.exports = (app, db) => {

	// main api
	app.get('/', (req, res) => {
		res.send('AUTeM EMS API');
	});

	// other api
	require('./views/event')(app, db);
};