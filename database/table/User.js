module.exports = (sequelize, DataTypes) => sequelize.define('user', {
  user_id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV1
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: [2, 10]
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 16]
    }
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
}, {
  timestamps: true,
  createdAt: 'created_time',
  updatedAt: 'updated_time',
  deletedAt: 'deleted_time',
  paranoid: true,
  tableName: 'user',
  //underscored: true //默认false, true会自动将驼峰命名改为下划线
  freezeTableName: true, //默认false，修改表名为复数，true不修改表名
  defaultScope: {
    where: {
      sex: true
    }
  },
  scopes: {
    password: {
      where: {
        password: 222222
      }
    }
  }
});