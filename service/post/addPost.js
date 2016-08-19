var Post = require('../../database/main_db').Post;

module.exports = (req, res) => {
  Post.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};