module.exports = (sequelize, DataTypes) => {
	const meet_room = sequelize.define('meet_room', {
		room_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey:true,
			autoIncrement:true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		size: {
			type: DataTypes.ENUM({
                values:['4','6','8']
            }),
			allowNull : false
		}
	},{
		classMethods: {},
		tableName: 'meet_room',
		freezeTableName: true,
		underscored: true,
		timestamps: false
	});

	meet_room.associate = (models)=>{
		meet_room.hasMany(models.reservation, {
			foreignKey : "room_id",
			as : "meet_room",
		});
	}

	return meet_room;
};