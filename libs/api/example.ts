import axiosInstance from '@libs/api/axiosInstance';
import { IExample } from '@interfaces/index';

export const getExampleData = () => axiosInstance.get<any>('https://api.coinpaprika.com/v1/ticker/cspr-casper-network').then((res) => res.data);