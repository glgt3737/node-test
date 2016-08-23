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
  },
  task_status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      isIn: [[ true, false ]]
    }
  }
});