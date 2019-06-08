module.exports = (sequelize, DataTypes) => {
	const reservation = sequelize.define('reservation', {
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
			type: DataTypes.DATE,
			allowNull : false
		},
		end_at: {
			type: DataTypes.DATE,
			allowNull : false
		}
	},{
		classMethods: {},
		tableName: 'reservation',
		freezeTableName: true,
		underscored: true,
		timestamps: false,
	});
	reservation.associate = (models)=>{
		reservation.belongsTo(models.meet_room, {
			foreignKey : "room_id",
		});
		reservation.belongsTo(models.user, {
			foreignKey : "user_id",
		});
	}

	return reservation;
};