import app from './client/app';
import express from 'express';
import c from 'console-colors.js';
import 'dotenv/config';
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(c.green(`[APP] `) + `APP is online in the port ${PORT}`);
});