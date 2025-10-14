const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/saluto', (req,res) => {
    console.log("Serving a new request!")
    res.send({"messaggio":'Welcome to My Express App!'});
});

app.listen(PORT);
console.log('Server is running at http://localhost:3000/');