const User = require('../../database/main_db').User;
const UserInfo = require('../../database/main_db').UserInfo;
const Task = require('../../database/main_db').Task;
const Project = require('../../database/main_db').Project;

module.exports = (req, res) => {
  User.findAll({
    include: [{
      model: UserInfo
    }, {
      model: Task,
      as: 'tasks'
    }, {
      model: Project,
      as: 'projects',
      attributes: ['id', 'project_name']
    }]
  })
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};