const app = require('./client/app.js');
require('dotenv').config;
const PORT = process.env.PORT || 3000;
const c = require('console-colors.js');

app.listen(PORT, () => {
    console.log(`[APP] APP is online in the port ${PORT}`);
});