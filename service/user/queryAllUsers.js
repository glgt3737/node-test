const User = require('../../database/main_db').User;
const USER_OUT = require('../../utils/paramsFilter').USER_OUT;

module.exports = (req, res) => {
  User.findAll({
    attributes: USER_OUT
  })
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};