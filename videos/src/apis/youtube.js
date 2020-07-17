import axios from 'axios';
//const KEY = 'AIzaSyDJBRDrTSrgww7U8M_yEws_d0iQNsC3IJY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

