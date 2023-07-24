import axios from 'axios';

export default async function hello(req, res) {
    const response = await axios.get('https://strapi-3nhz.onrender.com/api/posts', {
        headers: {
            Authorization: 'bearer ' + process.env.VITE_API_SECRET,
        }
    });
    res.statusCode = 200;
    res.json(response.data);
}