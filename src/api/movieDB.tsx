import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'd71a270c4dac3e2b243e53f6843fee0c',
        language: 'es-ES',
    },
});

export default movieDB;
