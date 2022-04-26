import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '5s', target: 100 },
    { duration: '25s', target: 100 },
    { duration: '5s', target: 250 },
    { duration: '25s', target: 250 },
    { duration: '5s', target: 500 },
    { duration: '25s', target: 500 },
    { duration: '5s', target: 1000 },
    { duration: '25s', target: 1000 },
    { duration: '15s', target: 0 } // scale down. Recover stage.
  ]
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