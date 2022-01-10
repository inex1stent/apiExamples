import express, { Router } from 'express';
const api = {
    hello: [
        'hello world'
    ]
}
const route = Router();

route.get('/api', (req, res) => {
    res.end(JSON.stringify(api, null, 4));
});

route.get('/', (req, res) => {
    res.status(200).send('GET /api');
});

export default route;