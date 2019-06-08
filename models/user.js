module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define('user', {
		user_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
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
		tableName: 'user',
		freezeTableName: true,
		underscored: true,
		timestamps: false
	});

	user.associate = (models)=>{
		user.hasOne(models.reservation, {
			foreignKey : "user_id",
		});
	}

	return user;
};