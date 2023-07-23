// defining the server port
const port = 5001

// initializing installed dependencies
const express = require('express')
require('dotenv').config()
const axios = require('axios')
const app = express()
const cors = require('cors')
app.use(cors())

// listening for port 5000
app.listen(5001, ()=> console.log(`Server is running on ${port}` ))

// API request
app.get('/', (req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://strapi-3nhz.onrender.com/api/posts',
        headers: {
            Authorization: 'bearer ' + process.env.API_SECRET
        }
    };

    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});
