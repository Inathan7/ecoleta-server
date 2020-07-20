import express from "express";

const app = express();

app.get('/users', (request, response) => {
    console.log('Lindo');

    response.json([
        'Inathan'
    ]);
});

app.listen(3333);