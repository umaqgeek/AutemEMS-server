module.exports = () => {

	// connect to database server
	var conndb = require('./conndb');

	const database = 'autem_ems_db';

	let sql = 'DROP DATABASE ' + database;
	conndb.query(sql, (err, res) => {
		let sql = 'CREATE DATABASE ' + database;
		conndb.query(sql, (err, res) => {
			if (err) {
				throw err;
			}
			console.log('Database created ..');

			// use database
			conndb.query('USE '+database);

			// load all models/tables
			let routeDb = './models';
			require(routeDb + '/event')(conndb);
			require(routeDb + '/alumni')(conndb);

			return conndb;
		});
	});

	// return conndb;
};