const User = require('../../database/main_db').User;
const resultJson = require('../../utils/resultJson');
const paramsFilter = require('../../utils/paramsFilter').user;

module.exports = (req, res) => {
  User.findAll({
    where: {
      username: req.body.username
    }
  })
    .then(result => {
      if(result.length === 0) res.status(401).send(resultJson('用户名错误'));
      else {
        const user = result[0].get({ plain: true });
        if(user.password !== req.body.password) res.status(401).send(resultJson('密码错误'));
        else {
          req.session.user = user;
          req.session.user_id = user.id;
          res.cookie('login_info', paramsFilter(user), { maxAge: 10800000 });
          res.send(resultJson(paramsFilter(user), 0));
        }
      }
    })
    .catch(err => res.status(500).send(err));
};