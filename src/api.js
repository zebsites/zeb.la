import axios from 'axios';

const getPosts = async () => {
    const response = await axios.get('https://strapi-3nhz.onrender.com/api/posts', {
        headers: {
            Authorization: 'bearer ' + import.meta.env.VITE_API_SECRET
        }
    });
    return response.data.data;

};

export default getPosts;