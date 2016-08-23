module.exports = (sequelize, DataTypes) => sequelize.define('user_info', {
  user_id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false
  },
  nick: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
    validate: {
      len: [2, 10]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
    validate: {
      isEmail: true
    }
  },
  sex: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: null,
    validate: {
      isIn: [[true, false]]
    }
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
    validate: {
      isDate: true
    }
  }
});