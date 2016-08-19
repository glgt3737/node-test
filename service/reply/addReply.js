var Reply = require('../../database/main_db').Reply;

module.exports = (req, res) => {
  Reply.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
};