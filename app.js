import express from 'express';
import { config } from 'dotenv';
import authRouter from './routes/auth.route.js';
import UserRouter from './routes/users.route.js';
import subscriptionRouter from './routes/subscription.route.js';
import arcjet from './config/arcjet.js';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const app = express();

app.use(express.json());
app.use(arcjet);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', UserRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.get('/', (req, res) => {
  res.send('Welcome to stack to pack API');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Subscription Stack to pack is running on http://localhost:${PORT}`);
});

export default app;
