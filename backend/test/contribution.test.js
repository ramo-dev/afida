const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose'); // Ensure mongoose is required
chai.use(chaiHttp);

const server = require('../server');
const Contribution = require('../models/Contribution.js'); // Ensure this path is correct
const should = chai.should();

describe('Contributions', () => {
  // Clear the database before each test
  beforeEach((done) => {
    Contribution.deleteMany({}, (err) => {
      done();
    });
  });

  // Close the database connection after all tests
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // Test the /GET route
  describe('/GET contributions', () => {
    it('it should GET all the contributions', (done) => {
      chai.request(server)
        .get('/api/contributions')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  // Test the /POST route
  describe('/POST contribution', () => {
    it('it should not POST a contribution without amount field', (done) => {
      let contribution = {
        user: "Owen Oloo"
      }
      chai.request(server)
        .post('/api/contributions')
        .send(contribution)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.have.property('amount');
          res.body.errors.amount.should.have.property('kind').eql('required');
          done();
        });
    });

    it('it should POST a contribution', (done) => {
      let contribution = {
        user: "Owen Oloo",
        amount: 100
      }
      chai.request(server)
        .post('/api/contributions')
        .send(contribution)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Contribution successfully added!');
          res.body.contribution.should.have.property('user');
          res.body.contribution.should.have.property('amount');
          done();
        });
    });
  });

  // Add more tests here for other routes and functionalities
});

