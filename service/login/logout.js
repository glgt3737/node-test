module.exports = (req, res) => {
  res.clearCookie('login_info');
  req.session.user_id = null;
  req.session.suer = null;
  res.send({ status: 0 })
};