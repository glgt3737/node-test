var UserInfo = require('../../database/main_db').UserInfo;

module.exports = (req, res) => {
  UserInfo.destroy({ where: { id: req.params.id } })
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};