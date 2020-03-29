'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stad = sequelize.define('Stad', {
    name: DataTypes.STRING,
    register: DataTypes.STRING,
    TaskId: DataTypes.INTEGER
  }, {});
  Stad.associate = function (models) {
    // associations can be defined here
    Stad.hasMany(models.Task)
  };
  return Stad;
};