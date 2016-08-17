const router = require('express').Router();

module.exports = (app) => {

  router.get('/users', require('./service/user/queryAllUsers'));
  router.post('/users', require('./service/user/addUser'));
  router.patch('/users/:id', require('./service/user/updateUser'));
  router.delete('/users/:id', require('./service/user/deleteUser'));
  
  router.post('/tasks', require('./service/task/addTask'));
  router.get('/tasks', require('./service/task/queryTask'));
  router.delete('/tasks/:id', require('./service/task/deleteTask'));

  app.use('/', router);
};