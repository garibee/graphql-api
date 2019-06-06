const ReservationModel = (sequelize, DataTypes) => {
	const RESERVATION = sequelize.define('RESERVATION', {
		user_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {model: 'user', key: 'user_id'}
		},
		room_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {model: 'conference_room', key: 'room_id'}
		},
		start_at: {
			type: 'TIMESTAMP',
			allowNull : false
		},
		end_at: {
			type: 'TIMESTAMP',
			allowNull : false
		}
	},{
		classMethods: {},
		tableName: 'RESERVATION',
		freezeTableName: true,
		underscored: true,
		timestamps: false,
	});
	return RESERVATION;
};
module.exports = ReservationModel;