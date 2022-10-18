const fetchData = axios.create({
  baseURL: 'http://localhost:3007/item'
})

fetchData.interceptors.response.use((response) => {
  return response.data.content;
}, error => {
  alert(error);
  return Promise.reject(error)
})

export const getDataProductList = (onSuccess) => {
  fetchData
    .get('')
    .then((response) => {
      onSuccess(response)
    })
}

export const getDataProductCard = (onSuccess) => {
  fetchData
    .get('/item')
    .then((response) => {
      onSuccess(response);
    })
}