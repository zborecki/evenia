import axios from 'axios';

export const nextAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEXT_API,
  headers: {
    'Content-Type': 'application/json'
  }
});
