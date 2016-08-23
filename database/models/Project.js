module.exports = (sequelize, DataTypes) => sequelize.define('project', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV1
  },
  project_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});