module.exports = (sequelize, DataTypes) => sequelize.define('task', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV1
  },
  task_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});