'use strict';
global.IS_TEST = process.argv[6] =="--development"?true:false;

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

// test option added
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const models = ['user', 'meet_room', 'reservation'];
models.forEach(modelName =>{
  db[modelName]  = sequelize.import(path.join(__dirname, modelName+'.js'));
});

Object.keys(db).forEach(modelName => {
  if(db[modelName].associate){
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
