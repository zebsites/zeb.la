import axios from 'axios';

const getPosts = async () => {
    const response = await axios.get('https://strapi-3nhz.onrender.com/api/posts', {
        headers: {
            Authorization: 'bearer bb70131e9ec9b24d30be13c118f80dee0749335e8e3218f7b7a5340c21870e87d0a3363bbee5390c2f52dd99bbc334ed64027b0c062f52874aa340516ee85c562402f6c5596b84190e72e86563f4a25eef2acca13f7f1d0890af43f639c774024ca773a55236e007a9c13c0763a1a320455c52de2593a9271ad3c40b3a26a5d3'
        }
    });
    return response.data.data;
    // console.log(response)
};

export default getPosts;