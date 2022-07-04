import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const getRequest = async <T>(url: string, query?: string, config?: any): Promise<T> => {
  const reqQuery = `${query && query.length > 0 ? `?${query}` : ''}`;

  const result = axios.get<T>(baseUrl + url + reqQuery, config).then((resp) => {
    return resp.data;
  });

  return result;
};

export const postRequest = async <T>(url: string, body: any, config: any, onError?: (e: any) => void) => {
  const result = axios
    .post<T>(url, body, config)
    .then((resp) => {
      return resp;
    })
    .catch((e) => {
      onError && onError(e);
    });

  return result;
};
