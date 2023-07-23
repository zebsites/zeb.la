import axios from 'axios';

const callApi = async (route) => {
    const response = await axios.get('http://localhost:5001/');
    return response.data.data;

};

export default callApi;