import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '08fed31d7dffc21c1d26a491ca725943'

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
       
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}