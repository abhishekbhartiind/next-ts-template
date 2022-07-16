import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const getRequest = async <T>(url: string, query?: string, config?: any): Promise<T> => {
  const reqQuery = `${query && query.length > 0 ? `?${query}` : ''}`;

  const result = axios.get<T>(baseUrl + url + reqQuery, config).then((resp) => {
    return resp.data;
  });

  return result;
};

export const postRequest = async <T>(url: string, body: any, config?: any, onError?: (e: any) => void): Promise<T> => {
  const result = axios.post<T>(baseUrl + url, body, config).then((resp) => {
    return resp.data;
  });

  return result;
};
