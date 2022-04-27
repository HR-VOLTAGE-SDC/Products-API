import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '5s', target: 100 },
    { duration: '25s', target: 100 },
    { duration: '5s', target: 200 },
    { duration: '25s', target: 200 },
    { duration: '5s', target: 300 },
    { duration: '25s', target: 300 },
    { duration: '5s', target: 400 },
    { duration: '25s', target: 400 },
    { duration: '15s', target: 0 } // scale down. Recover stage.
  ]
};

const productId = Math.floor(Math.random() * (1000011 - 900009 +1) + 900009)

export default () => {
  http.get(`http://localhost:5000/products/${productId}/styles`)
  sleep(1);
};