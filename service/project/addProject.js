var Project = require('../../database/main_db').Project;

module.exports = (req, res) => {
  Project.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};