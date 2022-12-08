'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class TopicBoard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TopicBoard.hasMany(models.Comments, { foreignKey: 'topicId' })
      TopicBoard.belongsTo(models.Users, { foreignKey: 'userId' })
    }
  }
  TopicBoard.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      topic: DataTypes.TEXT,
      date: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'TopicBoard',
      tableName: 'topicboards'
    }
  )
  return TopicBoard
}
