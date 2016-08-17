module.exports = (sequelize, DataTypes) => sequelize.define('task', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV1
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  task_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  createdAt: 'created_time',
  updatedAt: 'updated_time',
  deletedAt: 'deleted_time',
  paranoid: true,
  tableName: 'task',
  underscored: true, //默认false, true会自动将驼峰命名改为下划线
  freezeTableName: true //默认false，修改表名为复数，true不修改表名
});