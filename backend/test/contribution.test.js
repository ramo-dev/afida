const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const server = require('../server');
const Contribution = require('../models/Contribution');

chai.use(chaiHttp);
const should = chai.should();
const request = chai.request;

jest.setTimeout(10000); // Increase Jest timeout to 10 seconds

describe('Contributions', () => {
  beforeEach(async () => {
    try {
      await Contribution.deleteMany({});
    } catch (err) {
      console.error('Error clearing Contributions collection:', err.message);
    }
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  describe('/GET contributions', () => {
    it('should GET all the contributions', (done) => {
      request(server)
        .get('/api/contributions')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST contribution', () => {
    it('should not POST a contribution without amount field', (done) => {
      let contribution = {
        title: "Sample Contribution",
        description: "This is a sample"
      };
      request(server)
        .post('/api/contributions')
        .send(contribution)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          done();
        });
    });

    it('should POST a contribution', (done) => {
      let contribution = {
        title: "Sample Contribution",
        description: "This is a sample",
        amount: 100
      };
      request(server)
        .post('/api/contributions')
        .send(contribution)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('title');
          res.body.should.have.property('description');
          res.body.should.have.property('amount');
          done();
        });
    });
  });
});
