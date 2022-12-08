'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class symptomTracker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  symptomTracker.init({
    userId: DataTypes.INTEGER,
    date: DataTypes.STRING,
    overallFeeling: DataTypes.INTEGER,
    pain: DataTypes.INTEGER,
    hoursOfSleep: DataTypes.INTEGER,
    flare: DataTypes.BOOLEAN,
    additionalNotes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'symptomTracker',
  });
  return symptomTracker;
};