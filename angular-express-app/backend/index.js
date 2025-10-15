const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/welcome', (req,res) => {
    res.json({msg:'Welcome to my app!'});
});

app.listen(PORT);

console.log('App is listening at http://localhost:3000');