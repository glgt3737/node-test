const router = require('express').Router();
const loginFilter = require('./utils/loginFilter');

module.exports = (app) => {

  router.get('/users', require('./service/user/queryAllUsers'));
  router.post('/users', require('./service/user/addUser'));
  router.patch('/users/:id', require('./service/user/updateUser'));
  router.delete('/users/:id', require('./service/user/deleteUser'));
  
  router.post('/tasks', require('./service/task/addTask'));
  router.post('/bulkTasks', require('./service/task/bulkAddTasks'));
  router.get('/tasks', require('./service/task/queryTask'));
  router.delete('/tasks/:id', require('./service/task/deleteTask'));
  router.delete('/bulkTasks', require('./service/task/bulkDelTasks'));

  router.post('/userInfo', require('./service/userInfo/addUserInfo'));
  router.get('/userInfo', require('./service/userInfo/queryUserInfo'));
  router.delete('/userInfo/:id', require('./service/userInfo/deleteUserInfo'));

  router.post('/projects', require('./service/project/addProject'));
  router.get('/projects', require('./service/project/queryProject'));

  router.post('/addUserToProject', require('./service/user/addUserToProject'));

  router.post('/post', require('./service/post/addPost'));
  router.get('/post', require('./service/post/queryPost'));
  router.post('/reply', require('./service/reply/addReply'));

  app.post('/login', require('./service/login/login'));
  app.use('/', loginFilter, router);

};