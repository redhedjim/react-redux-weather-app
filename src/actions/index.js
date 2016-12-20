import axios from 'axios';

const API_KEY = 'cab7ef0a643086e26c6b012ffc443987';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  console.log('Fired');
  
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log("Request: ", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}