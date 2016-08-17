var User = require('../../database/main_db').User;
const paramsFilter = require('../../utils/paramsFilter').out;
const resultJson = require('../../utils/resultJson');

module.exports = (req, res) => {
  User.update(req.body, {
    where: {
      user_id: req.params.id
    }
  })
    .then(() => {
      User.findById(req.params.id)
        .then(result => res.send(resultJson(0, paramsFilter.user(result.dataValues))))
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
};