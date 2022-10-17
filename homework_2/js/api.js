const fetchCart = axios.create({
  baseURL: 'http://localhost:3007/item'
})

fetchCart.interceptors.response.use((response) => {
  return response.data.content;
}, error => {
  alert(error);
  return Promise.reject(error)
})

export const getDataProductList = (onSuccess) => {
  fetchCart
    .get('')
    .then((response) => {
      onSuccess(response)
    })
}

export const getDataProductCard = (onSuccess) => {
  fetchCart
    .get('/item')
    .then((response) => {
      onSuccess(response);
    })
}