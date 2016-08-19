const User = require('../../database/main_db').User;
const UserInfo = require('../../database/main_db').UserInfo;
const Task = require('../../database/main_db').Task;
const Project = require('../../database/main_db').Project;
const Post = require('../../database/main_db').Post;
const Reply = require('../../database/main_db').Reply;

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
    }, {
      model: Post,
      as: 'topics'
    }, {
      model: Reply,
      as: 'replies'
    }]
  })
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};