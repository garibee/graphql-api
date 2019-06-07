module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define('USER', {
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

	user.associate = (models)=>{
		user.hasOne(models.RESERVATION, {foreignKey : "user_id", as : "user"});
	}

	return user;
};