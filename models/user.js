'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    direction: DataTypes.STRING,
    TaskId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Task)
  };
  return User;
};