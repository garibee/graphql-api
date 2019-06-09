const TABLE_NAME = global.IS_TEST==true?"reservation_test":"reservation";

module.exports = (sequelize, DataTypes) => {
	const reservation = sequelize.define(TABLE_NAME, {
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
		tableName: TABLE_NAME,
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