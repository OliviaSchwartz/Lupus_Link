'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class SymptomTracker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SymptomTracker.belongsTo(models.Users, { foreignKey: 'userId' })
    }
  }
  SymptomTracker.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      date: DataTypes.STRING,
      overallFeeling: DataTypes.INTEGER,
      hoursOfSleep: DataTypes.INTEGER,
      painLevel: DataTypes.INTEGER,
      flare: DataTypes.STRING,
      notes: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'SymptomTracker',
      tableName: 'symptomtrackers'
    }
  )
  return SymptomTracker
}
