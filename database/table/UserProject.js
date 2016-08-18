module.exports = (sequelize, DataTypes) => sequelize.define('user_project', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  project_id: {
    type: DataTypes.UUID,
    allowNull: false
  }
});