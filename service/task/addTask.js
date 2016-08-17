var Task = require('../../database/main_db').Task;

module.exports = (req, res) => {
  Task.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};