const UserModel = (sequelize, DataTypes) => {
	const USER = sequelize.define('USER', {
		user_id: {
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
		dept: {
			type: DataTypes.STRING(50),
			allowNull : true
		}
	},{
		classMethods: {},
		tableName: 'USER',
		freezeTableName: true,
		underscored: true,
		timestamps: false
	});
	return USER;
};
module.exports = UserModel;