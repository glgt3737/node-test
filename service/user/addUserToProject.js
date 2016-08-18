var UserProject = require('../../database/main_db').UserProject;

module.exports = (req, res) => {
  UserProject.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
};