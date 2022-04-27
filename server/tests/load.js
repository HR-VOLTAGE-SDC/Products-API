import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '10s', target: 100 },
    { duration: '50s', target: 100 },
    { duration: '10s', target: 0 }
  ],
  thresholds: {
    http_req_duration: ['p(99)<150'], // 99% of requests must complete below 150ms
  },
};

const productId = Math.floor(Math.random() * (1000011 - 900009 +1) + 900009)

export default () => {
  http.get(`http://localhost:5000/products/${productId}`)
  sleep(1);
};