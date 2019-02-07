module.exports = (sequelize, Sequelize) => {
	const alumnis = sequelize.define('alumnis', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING(200),
			allowNull: false
		},
		email: {
			type: Sequelize.STRING(200),
			allowNull: false
		},
		phone: {
			type: Sequelize.STRING(20),
			allowNull: false
		},
		address: {
			type: Sequelize.TEXT
		}
	});

	return alumnis;
};