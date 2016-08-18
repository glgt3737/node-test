var Sequelize = require('sequelize');
var config = require('../config').main_db;

var sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  },
  timezone: '+08:00',
  define: {
    timestamps: true,
    createdAt: 'created_time',
    updatedAt: 'updated_time',
    deletedAt: 'deleted_time',
    paranoid: true,
    underscored: true,    //默认false, true会自动将驼峰命名改为下划线
    freezeTableName: true //默认false，修改表名为复数，true不修改表名
  }
});

sequelize.authenticate()
.then(err => console.log('Connection has been established successfully'))
.catch(err => console.log('Unable to connect to the database:', err));

var User = sequelize.import('./table/User.js');
var Task = sequelize.import('./table/Task.js');
var UserInfo = sequelize.import('./table/UserInfo.js');
var Project = sequelize.import('./table/Project.js');
var UserProject = sequelize.import('./table/UserProject.js');

Task.belongsTo(User, { foreignKey: 'user_id', as: 'user_detail' });
User.hasMany(Task, { foreignKey: 'user_id', as: 'tasks' });

UserInfo.belongsTo(User);
User.hasOne(UserInfo);

User.belongsToMany(Project, { as: 'projects', through: UserProject });
Project.belongsToMany(User, { as: 'workers',through: UserProject });

//{force: true}
sequelize.sync();

module.exports = {
  User,
  Task,
  UserInfo,
  Project,
  UserProject
};