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
  .then((r) => {
    if(r.status >= 404){
      throw Error("Something went wrong.. Try again, or email us at uta.mobi@gmail.com.")
    }
    return r;
  })
  .then((res) => res.json())
  .then((res) => {
    if(res.error){
      throw res.error
    }
    else{
      return res
    }
  })
  .catch((err) => { throw new Error(err) })
}