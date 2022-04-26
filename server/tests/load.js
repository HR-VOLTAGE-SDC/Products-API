import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '5m', target: 100 },
    { duration: '10m', target: 100 },
    { duration: '5m', target: 0 }
  ],
  // scenarios: {
  //   constant_request_rate: {
  //     executor: 'constant-arrival-rate',
  //     rate: 1000,
  //     timeUnit: '1s',
  //     duration: '10m',
  //     preAllocatedVUs: 100,
  //     maxVUs: 100
  //   }
  // },
  thresholds: {
    http_req_duration: ['p(99)<150'], // 99% of requests must complete below 150ms
  },
};

const BASE_URL = 'http://localhost:5000/products';
const productId = Math.floor(Math.random() * (1000011 - 900009 +1) + 900009)


export default () => {
  http.batch([
    ['GET', `${BASE_URL}`],
    ['GET', `${BASE_URL}/${productId}`],
    ['GET', `${BASE_URL}/${productId}/styles`],
    ['GET', `${BASE_URL}/${productId}/related`]
  ]);
  sleep(1);
};