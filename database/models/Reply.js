module.exports = (sequelize, DataTypes) => sequelize.define('reply', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV1
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
});