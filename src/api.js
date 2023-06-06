import axios from 'axios';

const getPosts = async (term) => {
    const response = await axios.get('http://localhost:1337/api/posts', {
        headers: {
            Authorization: 'bearer ded772b9b9d8034d2c95754e629acbd8233b55bf4baf672d1bea7eb4404e9bc9e0b68bf46171c2be5e15382a02a025794d9d89421bafd0c0ab3250ade2d88051ef4ef650108bc7b2be60fb4edf6655bb91f22f14fc95297a7537fb519126484b5289488d7dcc5f78a7f28cb18780f508bb7a5bb25baf1b123eefa59d94820472'
        }
    });
    console.log(response.data.data);
    return response;
};

export default getPosts;