const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lesson extends Model {}

Lesson.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      validate: {
        isDate: true,
      },
    },
    timeslot_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'weekly_timeslots',
        key: 'id',
      },
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'students',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'lessons',
  }
);

module.exports = Lesson;
