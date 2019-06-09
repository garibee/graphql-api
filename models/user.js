const TABLE_NAME = global.IS_TEST==true?"user_test":"user";

module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(TABLE_NAME, {
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
		tableName: TABLE_NAME,
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