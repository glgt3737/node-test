const User = require('../database/main_db').User;

module.exports = (req, res, next) => {
  const user = req.cookies['login_info'];
  if(user) {
    User.findAll({
      where: {
        username: user.username
      }
    })
      .then(result => {
        if(result.length !== 0) {
          const userInfo = result[0].get({ plain: true });
          req.session.user = userInfo;
          req.session.user_id = userInfo.id;
          console.log(user.username + '已登录');
          next();
        }
      })
      .catch(err => res.send(err))
  }else if(!req.session.user_id) {
    res.status(401).send('未登录！');
  }else {
    next();
  }

};