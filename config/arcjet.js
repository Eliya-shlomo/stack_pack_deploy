import { arcjet } from '@arcjet/express';

export default arcjet({
  apiKey: process.env.ARCJET_API_KEY,
  rateLimit: {
    max: 100, 
    windowMs: 60 * 1000,
  },
  ddos: true,
});
