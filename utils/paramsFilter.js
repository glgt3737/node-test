var _ = require('lodash');
const USER_IN = ['username', 'password', 'nick', 'email', 'sex', 'birthday'];
const USER_OUT = ['user_id', 'username', 'nick', 'email', 'sex', 'birthday'];

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
  in: {
    user: (obj) => paramsFilter(obj, USER_IN)
  },
  out: {
    user: (obj) => paramsFilter(obj, USER_OUT)
  },
  USER_OUT
};