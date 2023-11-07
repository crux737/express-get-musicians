// install dependencies
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
        expect(res).toBe(musicianOne);

    } )


    
    




    
})