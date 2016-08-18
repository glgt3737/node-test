var User = require('../../database/main_db').User;
const paramsFilter = require('../../utils/paramsFilter').out;
const resultJson = require('../../utils/resultJson');

module.exports = (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    },
    fields: ['password']
  })
    .then(() => {
      User.findById(req.params.id)
        .then(result => res.send(resultJson(0, paramsFilter.user(result.get({ plain: true })))))
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
};