var pg = require('pg');

module.exports = (req, res) => {
  pg.defaults.ssl = true;
  pg.connect(process.env.DATABASE_URL, (err, client) => {
    if(err) throw err;
    console.log('Connected to postgres! Getting schemas...');

    client
      .query('select table_schema, table_name from information_schema.tables')
      .on('row', row => res.send(JSON.stringify(row)));
  });
};
