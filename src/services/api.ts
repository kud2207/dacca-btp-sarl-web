import axios from "axios";

export const apiAdm = axios.create({
    baseURL: 'http://localhost:3001/login/',
  });


  