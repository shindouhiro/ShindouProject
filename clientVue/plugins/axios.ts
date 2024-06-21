import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: '/', 
    timeout: 1000,
  });

  nuxtApp.provide('axios', instance);
});
