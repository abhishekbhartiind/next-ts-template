import axiosInstance from '@libs/api/axiosInstance';

export const getExampleData = () => axiosInstance.get<any>('https://api.coinpaprika.com/v1/ticker/cspr-casper-network').then((res) => res.data);