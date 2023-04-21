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

export function deleteForm(formId) {
  return sendRequest(`${BASE_URL}/deleteform`, 'POST', formId)
}

export function getUserData() {
  return sendRequest(`${BASE_URL}/getuserdata`)
}

export function updateForm(data){
  return sendRequest(`${BASE_URL}/updateform`, 'PUT', data)
}