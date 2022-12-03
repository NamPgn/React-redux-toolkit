import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export const instanceAuth=axios.create({
    baseURL:"http://localhost:3001/api/"
})