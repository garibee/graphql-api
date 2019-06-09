const TABLE_NAME = global.IS_TEST==true?"meet_room_test":"meet_room";

module.exports = (sequelize, DataTypes) => {
	const meet_room = sequelize.define(TABLE_NAME, {
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
		tableName: TABLE_NAME,
		freezeTableName: true,
		underscored: true,
		timestamps: false
	});

	meet_room.associate = (models)=>{
		meet_room.hasOne(models.reservation, {
			foreignKey : "room_id",
		});
	}

	return meet_room;
};