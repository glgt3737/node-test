var Task = require('../../database/main_db').Task;
var User = require('../../database/main_db').User;

module.exports = (req, res) => {
  Task.findAll({ include: [{
    model: User,
    as: 'user_detail',
    attributes: ['username']
  }]
  })
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};