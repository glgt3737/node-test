var Post = require('../../database/main_db').Post;
var Reply = require('../../database/main_db').Reply;
var User = require('../../database/main_db').User;

module.exports = (req, res) => {
  Post.findAll({ include: [{
    model: User,
    as: 'create_user'
  }, {
    model: Reply,
    as: 'replies',
    include: [{
      model: User,
      as: 'create_user'
    }]
  }]
  })
    .then(result => res.send({status: 0, response: result}))
    .catch(err => res.status(500).send(err))
};