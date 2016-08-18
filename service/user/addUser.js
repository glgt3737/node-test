var User = require('../../database/main_db').User;

module.exports = (req, res) => {
  User.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
};