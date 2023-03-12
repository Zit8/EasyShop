/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';
import type { DataProvider } from 'react-admin';

const dataApiProvider: DataProvider = {
  getList: async () => {
    const products = await axios('http://localhost:3001/api/posts');
    return posts.data;
  },
} as any;

export default dataApiProvider;
