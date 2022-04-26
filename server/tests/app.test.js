const request = require('supertest');
const app = require('./../app');


describe('GET /products', function() {
  it('responds with a status of 200 for products', async function() {
    const response = await request(app)
      .get('/products')
      .set('Accept', 'application/json')
    expect(response.status).toEqual(200);
  });
});

describe('GET /products/:id', function() {
  it('responds with a status of 200 for a product', async function() {
    const id = 123;
    const response = await request(app)
      .get(`/products/${id}`)
      .set('Accept', 'application/json')
    expect(response.status).toEqual(200);
  });
});

describe('GET /products/:id/styles', function() {
  it('responds with a status of 200 for styles', async function() {
    const id = 123;
    const response = await request(app)
      .get(`/products/${id}/styles`)
      .set('Accept', 'application/json')
    expect(response.status).toEqual(200);
  });
});

describe('GET /products/:id/related', function() {
  it('responds with a status of 200 for related products', async function() {
    const id = 123;
    const response = await request(app)
      .get(`/products/${id}/styles`)
      .set('Accept', 'application/json')
    expect(response.status).toEqual(200);
  });
});