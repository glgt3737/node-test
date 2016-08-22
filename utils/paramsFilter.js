var _ = require('lodash');
const USER_IN = ['username', 'password'];
const USER_OUT = ['id', 'username'];

const paramsFilter = (obj, list) => {
  var temp_obj = {};
  if(obj) {
    Object.keys(obj).forEach(key => {
      if(_.includes(list, key)) {
        temp_obj[key] = obj[key];
      }
    });
  }
  return temp_obj;
};

module.exports = {
  user: (obj) => paramsFilter(obj, USER_OUT),
  USER_IN,
  USER_OUT
};