var UserInfo = require('../../database/main_db').UserInfo;
var User = require('../../database/main_db').User;

module.exports = (req, res) => {
  UserInfo.findAll({ include: [{
    model: User
  }]
  })
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};