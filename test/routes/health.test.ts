export {};

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../src/server');

chai.use(chaiHttp);
chai.should();

describe('Health endpoint', () => {
  it('returns Ok', async () => {
    chai.request(app)
      .get('/health')
      .end((err: any, res: any) => {
        res.should.have.status(200);
      });
  });
});
