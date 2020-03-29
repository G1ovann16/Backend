'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stad = sequelize.define('Stad', {
    name: DataTypes.STRING,
    register: DataTypes.STRING
  }, {});
  Stad.associate = function(models) {
    // associations can be defined here
  };
  return Stad;
};