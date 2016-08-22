const User = require('../../database/main_db').User;
const resultJson = require('../../utils/resultJson');
const USER_IN = require('../../utils/paramsFilter').USER_IN;

module.exports = (req, res) => {
  User.create(req.body, {
    fields: USER_IN
  })
    .then(result => res.send(resultJson(result, 0)))
    .catch(err => res.status(500).send(resultJson(err)));
};