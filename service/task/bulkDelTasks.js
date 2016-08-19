var Task = require('../../database/main_db').Task;
var resultJson = require('../../utils/resultJson');

module.exports = (req, res) => {
  Task.destroy({
    where: {
      id: JSON.parse(req.body.valueString)
    }
  })
    .then(result => res.send(resultJson(0, result)))
    .catch(err => res.status(500).send(err))
};