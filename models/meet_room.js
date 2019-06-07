module.exports = (sequelize, DataTypes) => {
	const meet_room = sequelize.define('MEET_ROOM', {
		room_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			unique: true,
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
		tableName: 'MEET_ROOM',
		freezeTableName: true,
		underscored: true,
		timestamps: false
	});

	meet_room.associate = (models)=>{
		meet_room.hasOne(models.RESERVATION, {foreignKey : "room_id", as : "room"});
	}

	return meet_room;
};