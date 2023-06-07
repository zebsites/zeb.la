import axios from 'axios';

const getPosts = async () => {
    const response = await axios.get('/api/posts', {
        headers: {
            Authorization: 'bearer ' + import.meta.env.PROD_API_SECRET
        }
    });
    return response.data.data;
    // console.log(response)
};

export default getPosts;