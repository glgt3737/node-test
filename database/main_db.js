var Sequelize = require('sequelize');
var config = require('../config').main_db;

var sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',

  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
});

sequelize.authenticate()
.then(err => console.log('Connection has been established successfully'))
.catch(err => console.log('Unable to connect to the database:', err));

var User = sequelize.define('users', {
  user_id: {
    primaryKey: true,
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV1
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: [2, 10]
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [6, 16]
    }
  },
  nick: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: [2, 10]
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  sex: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    validate: {
      isIn: [true, false]
    },
    get: function() {
      var sex = this.getDataValue('sex');
      return (sex === 'true' || sex === 'false') ? sex === 'true' : sex
    }
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: true,
    validate: {
      isDate: true
    }
  }
}, {
  timestamps: true,
  createdAt: 'created_time',
  updatedAt: 'updated_time',
  deletedAt: 'deleted_time',
  paranoid: true,
  tableName: 'users'
});

//{force: true}
User.sync();

module.exports = {
  User
};