'use strict';

const db = require('../models');

module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    description: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    condition_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'items'
  });

  Item.associations = function (models) {
    Item.belongsTo(models.Condition, {
      foreignKey: 'condition_id'
    });
  }
  return Item;
};