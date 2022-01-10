import express from 'express';
import route from '../router/router';
const app = express();

app.use(route);

export default app;