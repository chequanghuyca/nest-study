import express from 'express';

const app = express();

app.listen(6666, 'localhost', () => {
    console.log('Server is running at http://localhost:6666');
});