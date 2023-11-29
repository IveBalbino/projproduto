const express = require('express');
const app = express();
const port = 3000;

const router = require('./src/routers/router');

app.use(express.json());

app.use("/", router);

app.listen(port, () => {
    console.log(`Servidor iniciado! http://localhost:${port}`);
});