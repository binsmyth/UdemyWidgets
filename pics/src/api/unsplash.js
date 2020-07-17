import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Fy-p4Hat8DVIdlkwv_GQbbxZTBB2L0h6VN-Eg6b67Xg'
    }
});
