const express = require('express');
const app = express();

const port = 5100;

app.listen(port, (req, res) => {
    console.log(`App listening on port ${port}`);  
});

app.get('/', (req, res) => {
    console.log('request made');
    console.log(req.path, req.method, req.hostname);
    res.sendFile('./Docs/index.html', { root: __dirname });
});

app.use((req, res) => {
    res.status(404).sendFile('./Docs/404.html', { root: __dirname });
});