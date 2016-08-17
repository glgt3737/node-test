var Task = require('../../database/main_db').Task;

module.exports = (req, res) => {
  Task.destroy({ where: { id: req.params.id }, force: true })
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};