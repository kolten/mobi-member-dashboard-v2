import { baseUrl } from './config';

const BASE_URL = baseUrl();

const token = localStorage.getItem('token');

export const apiWrapper = (url, config) => {
  const data = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }
  
  return fetch(`${BASE_URL}${url}`, Object.assign({}, data, config))
  .then((r) => r)
  .then((res) => res.json())
  .then((res) => {
    if(res.error){
      throw Error(res.error)
    }
    else{
      return res
    }
  })
  .catch((err) => {throw Error(err)})
}