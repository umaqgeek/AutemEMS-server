module.exports = (app, db) => {
	app.get('/events', require('../controllers/listEvents')(db));
};