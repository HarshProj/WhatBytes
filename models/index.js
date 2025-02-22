'use strict';
const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.js"); // ✅ Use config.js
const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, config.development);

fs.readdirSync(__dirname)
  .filter(file => file !== basename && file.slice(-3) === ".js")
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
