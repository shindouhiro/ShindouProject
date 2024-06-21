// http.ts

const BASE_URL = 'http://localhost:4000'; // 基础 URL，可以根据需要修改

const defaultHeaders = {
  'Content-Type': 'application/json',
  // 其他默认的请求头
};

interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, any>;
}

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    switch (response.status) {
      case 401:
        window.location.href = '/login';
        break;
      default:
        throw new Error(error.message || 'Something went wrong');
    }
  }
  return response.json();
};

const handleError = (error: Error) => {
  console.error('Fetch Error:', error);
  throw error;
};

const buildUrlWithParams = (url: string, params?: Record<string, any>): string => {
  const urlObj = new URL(`${BASE_URL}${url}`);
  if (params) {
    urlObj.search = new URLSearchParams(params).toString();
  }
  return urlObj.toString();
};

const request = async (url: string, options: RequestOptions = {}) => {
  const { method = 'GET', headers = {}, body, params } = options;
  const token = localStorage.getItem('token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config: RequestInit = {
    method,
    headers: { ...defaultHeaders, ...headers },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const fetchUrl = params ? buildUrlWithParams(url, params) : `${BASE_URL}${url}`;

  try {
    const response = await fetch(fetchUrl, config);
    return await handleResponse(response);
  } catch (error) {
    console.log({ error })
    handleError(error as Error);
  }
};

export const get = (url: string, params?: Record<string, any>, options: RequestOptions = {}) =>
  request(url, { ...options, method: 'GET', params });

export const post = (url: string, body: any, options: RequestOptions = {}) =>
  request(url, { ...options, method: 'POST', body });

export const put = (url: string, body: any, options: RequestOptions = {}) =>
  request(url, { ...options, method: 'PUT', body });

export const del = (url: string, options: RequestOptions = {}) =>
  request(url, { ...options, method: 'DELETE' });
