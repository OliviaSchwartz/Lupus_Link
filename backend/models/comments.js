'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    static associate(models) {
      Comments.belongsTo(models.TopicBoard, { foreignKey: 'topicId' })
      Comments.belongsTo(models.Users, { foreignKey: 'userId' })
    }
  }
  Comments.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      topicId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'topicboards',
          key: 'id'
        }
      },
      comment: DataTypes.TEXT,
      name: DataTypes.STRING,
      date: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Comments',
      tableName: 'comments'
    }
  )
  return Comments
}
