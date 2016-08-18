const User = require('../../database/main_db').User;
const Project = require('../../database/main_db').Project;

module.exports = (req, res) => {
  Project.findAll({
    include: [{
      model: User,
      as: 'workers'
    }]
  })
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};