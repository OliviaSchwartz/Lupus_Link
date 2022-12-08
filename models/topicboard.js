'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TopicBoard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TopicBoard.init({
    userId: DataTypes.INTEGER,
    topic: DataTypes.TEXT,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TopicBoard',
  });
  return TopicBoard;
};