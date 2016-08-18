var UserInfo = require('../../database/main_db').UserInfo;

module.exports = (req, res) => {
  UserInfo.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};