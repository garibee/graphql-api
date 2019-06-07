module.exports = (sequelize, DataTypes) => {
	const reservation = sequelize.define('RESERVATION', {
		user_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {model: 'user', key: 'user_id'}
		},
		room_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {model: 'meet_room', key: 'room_id'}
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
	reservation.associate = (models)=>{
		reservation.belongsTo(models.MEET_ROOM, {
			foreignKey : "room_id",
			as : "room"
		});
		reservation.belongsTo(models.USER, {
			foreignKey : "user_id",
			as : "user"
		});
	}
	return reservation;
};