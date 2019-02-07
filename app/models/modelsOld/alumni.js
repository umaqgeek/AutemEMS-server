module.exports = (db) => {

	var tableName = 'alumnis';

	var columns = [
		{
			'name': 'id',
			'type': 'INTEGER(11)',
			'properties': [
				'AUTO_INCREMENT', 
				'PRIMARY KEY'
			]
		},
		{
			'name': 'name',
			'type': 'VARCHAR(200)',
			'properties': [
				'NOT NULL'
			]
		},
		{
			'name': 'email',
			'type': 'VARCHAR(200)',
			'properties': [
				'NOT NULL'
			]
		},
		{
			'name': 'phone',
			'type': 'VARCHAR(20)',
			'properties': [
				'NOT NULL'
			]
		},
		{
			'name': 'address',
			'type': 'TEXT',
			'properties': [
			]
		}
	];

	var sql = 'CREATE TABLE `' + tableName + '` (';
	for (var i = 0; i < columns.length; i++) {
		let column = columns[i];
		var name = column.name;
		var type = column.type;
		var props = column.properties;
		sql += '`' + name + '` ' + type + ' ';
		for (var j = 0; j < props.length; j++) {
			sql += props[j] + ' ';
		}
		if (i != columns.length - 1) {
			sql += ',';
		}
	};
	sql += ')';

	db.query(sql, (err, res) => {
		if (err) {
			throw err;
		}
		console.log('Table ' + tableName + ' created ..');
	});
};