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
  timezone: '+08:00'
});

sequelize.authenticate()
.then(err => console.log('Connection has been established successfully'))
.catch(err => console.log('Unable to connect to the database:', err));

var User = sequelize.import('./table/User.js');
var Task = sequelize.import('./table/Task.js');

Task.belongsTo(User, { foreignKey: 'user_id', as: 'user_detail' });
User.hasMany(Task, { foreignKey: 'user_id', targetKey: 'user_id', as: 'tasks' });

//{force: true}
sequelize.sync();

module.exports = {
  User,
  Task
};