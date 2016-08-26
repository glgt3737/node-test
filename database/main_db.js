var Sequelize = require('sequelize');
var config = require('../config').main_db;

// var sequelize = new Sequelize(config.database, config.user, config.password, {
//   host: config.host,
//   dialect: 'mysql',
//   pool: {
//     max: 10,
//     min: 0,
//     idle: 10000
//   },
//   timezone: '+08:00',
//   define: {
//     timestamps: true,
//     createdAt: 'created_time',
//     updatedAt: 'updated_time',
//     deletedAt: 'deleted_time',
//     paranoid: true,
//     underscored: true,    //默认false, true会自动将驼峰命名改为下划线
//     freezeTableName: true //默认false，修改表名为复数，true不修改表名
//   }
// });
//
// sequelize.authenticate()
// .then(err => console.log('Connection has been established successfully'))
// .catch(err => console.log('Unable to connect to the database:', err));
//
// var User = sequelize.import('./models/User.js');
// var Post = sequelize.import('./models/Post.js');
// var Reply = sequelize.import('./models/Reply.js');
// var Task = sequelize.import('./models/Task.js');
// var UserInfo = sequelize.import('./models/UserInfo.js');
// var Project = sequelize.import('./models/Project.js');
// var UserProject = sequelize.import('./models/UserProject.js');
//
// Task.belongsTo(User, { foreignKey: 'user_id', as: 'user_detail' });
// User.hasMany(Task, { foreignKey: 'user_id', as: 'tasks' });
//
// UserInfo.belongsTo(User);
// User.hasOne(UserInfo);
//
// User.belongsToMany(Project, { as: 'projects', through: UserProject });
// Project.belongsToMany(User, { as: 'workers',through: UserProject });
//
//
// /**
//  * 帖子为例，关联关系练习
//  */
// User.hasMany(Post, { foreignKey: 'user_id', as: 'topics' });
// User.hasMany(Reply, { foreignKey: 'user_id', as: 'replies' });
// Post.belongsTo(User, { foreignKey: 'user_id', as: 'create_user' });
// Post.hasMany(Reply, { foreignKey: 'post_id', as: 'replies' });
// Reply.belongsTo(User, { foreignKey: 'user_id', as: 'create_user' });
//
//
//
// //{force: true}
// sequelize.sync();
//
// module.exports = {
//   User,
//   Task,
//   UserInfo,
//   Project,
//   UserProject,
//   Post,
//   Reply
// };