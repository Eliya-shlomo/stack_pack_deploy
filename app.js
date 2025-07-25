import express from 'express'
import { PORT } from './config/env.js';
const app = express()

app.get('/', (req,res) => {
    res.send("Welcome to stack to pack API")
});


app.listen( PORT, () => {
    console.log(`Subscription Stack to pack is running on "http://localhost:${PORT}"`);
})

export default app;