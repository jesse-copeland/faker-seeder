'use strict';
module.exports = (sequelize, DataTypes) => {
  var Condition = sequelize.define('Condition', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    tableName: 'conditions'
  });

  Condition.associations = function (models) {
    Condition.hasMany(models.Item, {
      foreignKey: 'condition_id'
    });
  }
  return Condition;
};