const Sequelize = require('sequelize');
const AlumnisModel = require('./models/alumnis');
const EventsModel = require('./models/events');

const config = {
	'host': 'localhost',
	'database': 'autem_ems_db',
	'username': 'root',
	'password': 'P@ssw0rd',
	'freshDb': true
};

// create connection
const sequelize = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect: 'mysql',
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

// create tables
const Alumnis = AlumnisModel(sequelize, Sequelize);
const Events = EventsModel(sequelize, Sequelize);

// foreign keys between tables
Events.belongsTo(Alumnis);

sequelize.sync({ 
	force: config.freshDb
})
.then(() => {
	console.log('Database & tables created ..');
});

module.exports = {
	Alumnis,
	Events
};