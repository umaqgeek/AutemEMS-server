module.exports = (sequelize, Sequelize) => {
	const events = sequelize.define('events', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING(200),
			allowNull: false
		},
		description: {
			type: Sequelize.TEXT
		}
	});

	return events;
};