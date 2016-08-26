var pg = require('pg');
var Sequelize = require('sequelize');

module.exports = (req, res) => {
  var sequelize = new Sequelize(process.env.DATABASE_URL);
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
