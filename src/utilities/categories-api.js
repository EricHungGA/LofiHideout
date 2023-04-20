import sendRequest from './send-request'

export function getCategories() {
    return sendRequest('/api/categories')
}