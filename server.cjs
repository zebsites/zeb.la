const PORT = 5001;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
/*

app.get('/', (req,res) => {
    res.json('hi');
})
*/

app.get('/posts', (req,res) => {
    console.log(req.query.endpoint);
    const options = {
        method: 'GET',
        url: `https://strapi-3nhz.onrender.com/api/posts`,
        headers: {
            Authorization: 'bearer ' + process.env.VITE_API_SECRET
        }
    }
    axios.request(options).then((response) => {
        res.json(response.data.data);
    }).catch((error) => {
        console.error(error);
    })
})

app.listen(5001, ()=> console.log(`Server is running on port ${PORT}`));