var pg = require('pg');
var Sequelize = require('sequelize');

module.exports = (req, res) => {
  var sequelize = new Sequelize(process.env.DATABASE_URL, {
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
    .then(err => res.send('Connection has been established successfully'))
    .catch(err => res.send('Unable to connect to the database:', err));
  // pg.defaults.ssl = true;
  // pg.connect(process.env.DATABASE_URL, (err, client, done) => {
  //   if(err) res.send(err);
  //   else {
  //     client.query('select table_schema, table_name from information_schema.tables', (err, result) => {
  //       done();
  //       if(err) res.send(err);
  //       else res.send(result);
  //     })
  //   }
  // });
};
