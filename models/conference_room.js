const ConferenceRoomModel = (sequelize, DataTypes) => {
	const CONFERENCE_ROOM = sequelize.define('CONFERENCE_ROOM', {
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
		tableName: 'CONFERENCE_ROOM',
		freezeTableName: true,
		underscored: true,
		timestamps: false
    });

	return CONFERENCE_ROOM;
};
module.exports = ConferenceRoomModel;