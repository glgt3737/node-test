var pg = require('pg');

module.exports = (req, res) => {
  pg.defaults.ssl = true;
  pg.connect(process.env.DATABASE_URL, (err, client, done) => {
    if(err) res.send(err);
    else {
      client.query('select table_schema, table_name from information_schema.tables', (err, result) => {
        done();
        if(err) res.send(err);
        else res.send(result);
      })
    }
  });
};
