'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    TaskId: DataTypes.INTEGER
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Task)
  };
  return  Category;
};