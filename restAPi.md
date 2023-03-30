**Microservice 1**
`const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Microservice 1!');
});

app.listen(port, () => {
    console.log(`Microservice 1 listening at http://localhost:${port}`);
});`

**Microservice 2**
`const axios = require('axios');

axios.get('http://localhost:3000')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });`
