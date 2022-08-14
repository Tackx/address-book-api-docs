import request from 'supertest';
import app from '../src/app';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

// beforeAll(async () => {
//   try {

//   } catch (e) {
//     console.log(e);
//   }
// });

// afterAll(async () => {
//   try {
//   } catch (e) {
//     console.log(e);
//   }
// });

// Test route for adding contacts to Firebase
describe('GET /', () => {
  describe('', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });

    // test('should respond with a 403 status code and the correct error message if JWT is missing', async () => {
    //   const response = await request(app)
    //     .post('/api/addressBook')
    //     .send({
    //       contact: {
    //         firstName: 'Test First Name',
    //         lastName: 'Test Last Name',
    //         address: 'Test Adress',
    //         phone: '123456',
    //       },
    //     });
    //   expect(response.statusCode).toBe(403);
    //   expect(response.body.message).toBe('A token is required for authentication');
    // });
    // test('should respond with a 401 status code and the correct error message if JWT is incorrect', async () => {
    //   const response = await request(app)
    //     .post('/api/addressBook')
    //     .send({
    //       token: '123456',
    //       contact: {
    //         firstName: 'Test First Name',
    //         lastName: 'Test Last Name',
    //         address: 'Test Adress',
    //         phone: '123456',
    //       },
    //     });
    //   expect(response.statusCode).toBe(401);
    //   expect(response.body.message).toBe('Invalid token');
    // });
    // test('should respond with a 403 status code if contact information is incomplete or in an incorrect format', async () => {
    //   const response = await request(app)
    //     .post('/contacts')
    //     .send({
    //       contact: {
    //         firstName: 'Test First Name',
    //         lastName: 'Test Last Name',
    //         // address: "Test Adress",
    //         phone: 'abc123456',
    //       },
    //     });
    //   expect(response.statusCode).toBe(400);
    // });
  });
});
