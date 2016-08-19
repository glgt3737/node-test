var Post = require('../../database/main_db').Post;
var Reply = require('../../database/main_db').Reply;
var User = require('../../database/main_db').User;

module.exports = (req, res) => {
  Post.findAll({ include: [{
    model: User,
    as: 'create_user',
    attributes: ['username']
  }, {
    model: Reply,
    as: 'replies',
    attributes: ['content'],
    include: [{
      model: User,
      as: 'create_user',
      attributes: ['username']
    }]
  }]
  })
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};