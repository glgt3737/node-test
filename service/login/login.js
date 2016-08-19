const User = require('../../database/main_db').User;

module.exports = (req, res) => {
  User.findAll({
    where: {
      username: req.body.username
    }
  })
    .then(result => {
      if(result.length === 0) res.status(401).send('用户名错误！');
      else {
        const user = result[0].get({ plain: true });
        if(user.password !== req.body.password) res.status(401).send('密码错误！');
        else {
          req.session.user = user;
          req.session.user_id = user.id;
          res.cookie('login_info', { username: user.username, nick: user.nick }, { maxAge: 10800000 });
          res.send({ status: 0, response: { username: user.username, nick: user.nick } });
        }
      }
    })
    .catch(err => res.send(err));
};