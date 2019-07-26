const server = require('../index');
const request = require('supertest');

describe('server', () => {
  it('[GET] / WORKS!', () => {
    return (
      request(server)
        // chain a lot of stuff
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect('Content-Length', '26')
    );
    // .then(res => {
    //   expect(res.body).toEqual({ api: 'up' });
    // });
  });
});
