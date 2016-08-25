var app = require('../server');
var request = require('supertest').agent(app);
var should = require('should');

//var userCookie;

describe('#index', () => {

  before((done) => {
    request.post('/login')
      .send({
        username: 'GeTing',
        password: '222222'
      })
      .expect(200)
      .end((err, res) => {
        //userCookie = res.headers['set-cookie'];
        done(err);
      })
  });

  it('should get /post', (done) => {
    request.get('/post')
      .expect(200, (err, res) => {
        res.text.should.containEql('status');
        res.text.should.containEql('title');
        done(err);
      })
  });

  it('should get /users', (done) => {
    request.get('/users')
      //.set('cookie', userCookie)
      .expect(200, (err, res) => {
        console.log(res.text);
        done(err);
      })
  });
});