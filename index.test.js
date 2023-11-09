
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");
const { Json } = require('sequelize/types/utils');


describe('./musicians endpoint', () => {
    // Write your tests here
    const request = require("supertest");
    test("Testing musicians endpoint", async () => {
        // Send request to `/musicians` endpoint
        const res = await req(app).get("/musician");

    });
    test("Testing musicians endpoint", async() => {
        // Send request to `/musicians`endpoint
        const res = await request(app).get("/musicians");
        expect(res.statusCode).toBe(200);

    })
    test("Testing musician endpoint", async() => {
        //Send request to `/musicians`endpoint
        const res = await request(app).get("/musicians");
        const responseData = Json.parse(res.text)
        expect(res).toBe(responseData)
    })
    test("Testing musicians1 endpoint", async => {
        // Send request to `/musicians/1` endpoint 
        const musicianOne =  request(app).get("/musicians/1");
        expect(res).toBe(musicianOne)
  
    })

    test("Should return a list of musicians", async => { 
        const musicianArray = request(app).get("/musicians/1");
        expect(res.body).toBe(musicianArray);

    })
    
    test('should return an error when "name" field is empty', async (done) => {
        response = await request(app).post('/musicians').send({ instrument: 'Guitar' }) 
        .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error');
            done();
          });
      });
    
      test('should return an error when "instrument" field is empty', async (done) => {
        filedEmpty = request(app).post('/musicians').send({ name: 'John' }) 
        .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error');
        done();
          });

    test('should return an error when "name" is too short', async (done) => {
    nameShort = request(app).post('/musicians').send({ name: 'C', instrument: 'Guitar'}) 
    .end((err, res) => {
    expect(res).to.have.status(400);
    expect(res.body).to.have.property('error');
    done();
        })

    test('should return an error when "name" is too long', async (done) => {
    namelong = request(app).post('/musicians').send({ name: 'NameIsTooLong', instrument: 'Guitar'}) 
    .end((err, res) => {
    expect(res).to.have.status(400);
    expect(res.body).to.have.property('error');
    done();
        })
})
