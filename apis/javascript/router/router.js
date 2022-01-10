const { Router } = require('express');
const { json } = require('express');
const api = {
    hello: [
        'hello world'
    ]
}
const route = Router();

route.use(json)

route.get('/api', (_, res) => {
    res.end(JSON.stringify(api, null, 4))
})

route.get('/', (req, res) => {
    res.send('GET /api')
})

module.exports = route;