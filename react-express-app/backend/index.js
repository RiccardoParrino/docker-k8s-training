const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())

app.get('/api/saluto', (req,res) => {
    console.log("Serving a new request!")
    res.json({messaggio:'Welcome to My React-Express App!'});
});

app.listen(PORT);
console.log('Server is running at http://localhost:3000/');