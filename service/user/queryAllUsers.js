const User = require('../../database/main_db').User;
var Task = require('../../database/main_db').Task;
const USER_OUT = require('../../utils/paramsFilter').USER_OUT;

module.exports = (req, res) => {
  User.findAll({
    attributes: USER_OUT,
    include: [{
      model: Task,
      as: 'tasks',
      attributes: ['id', 'task_name']
    }]
  })
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};