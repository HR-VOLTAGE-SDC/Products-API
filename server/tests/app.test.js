const request = require('supertest');
const app = require('./../app');


describe('GET /products', function() {
  it('responds with status of 200', async function() {
    const response = await request(app)
      .get('/products')
      .set('Accept', 'application/json')
    expect(response.status).toEqual(200);
  });
});

describe('GET /products/:id', function() {
  it('responds with product information for a product', async function() {
    const response = await request(app)
      .get('/products/:id')
      .set('Accept', 'application/json')
    expect(response.status).toEqual(200);
  });
});

describe('GET /products/:id/styles', function() {
  it('responds with all styles for a product', async function() {
    const response = await request(app)
      .get('/products/:id/styles')
      .set('Accept', 'application/json')
    expect(response.status).toEqual(200);
  });
});

describe('GET /products/:id/related', function() {
  it('responds with all related products for a product', async function() {
    const response = await request(app)
      .get('/products/:id/styles')
      .set('Accept', 'application/json')
    expect(response.status).toEqual(200);
  });
});