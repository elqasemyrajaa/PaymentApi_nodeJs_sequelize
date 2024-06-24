const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Post = require('../model/post')(sequelize, Sequelize);
const Employee = require('../model/employee')(sequelize, Sequelize);
const File = require('../model/fiche')(sequelize, Sequelize);
const Extra = require('../model/extra')(sequelize, Sequelize);

// Define associations
Post.hasMany(Employee, { foreignKey: 'id_post' });
Employee.belongsTo(Post, { foreignKey: 'id_post' });

Employee.hasMany(File, { foreignKey: 'id_employee' });
File.belongsTo(Employee, { foreignKey: 'id_employee' });

const db = {
  Sequelize,
  sequelize,
  Post,
  Employee,
  File,
  Extra,
};

module.exports = db;
