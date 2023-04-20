import sendRequest from './send-request'
const BASE_URL = '/api/users'

export function signUp(userData) {
  return sendRequest(`${BASE_URL}/signup`, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function sendForm(data) {
  console.log(data);
  return sendRequest(`${BASE_URL}/sendform`, 'POST', data);
}