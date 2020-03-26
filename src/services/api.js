import axios from 'axios';

/* TROCAR O ENDEREÇO ABAIXO PELO DO SERVER */
const api = axios.create({
    baseURL: 'http://192.168.1.78:3333'
});

export default api;
