const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    const subject = 
    ({
        "name":"Precious Okwu",
        "credit-card":"xxxxx-xxxxx-xxxx-0897"
    });

    res.status(201).json(subject);
});

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});