
// const axios = require('axios');

// axios
//   .get('http://localhost:3007/item')
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })


const getDataProductList = (onSuccess) => {
  fetch('http://localhost:3007/item')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    }
    )
    .then((item) => {
      onSuccess(item.content);
    })
  }

const getDataProductCard = (onSuccess) => {
  fetch('http://localhost:3007/item/:itemId')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    }
    )
    .then((content) => {
      onSuccess(content.content);
    })
  }

  // async function getData() {
  //   const [itemListResponse, itemCardResponse] = await Promise.all([
  //     fetch('http://localhost:3007/item'),
  //     fetch('http://localhost:3007/item/:itemId')
  //   ]);

  //   const list = await itemListResponse.json();
  //   const card = await itemCardResponse.json();

  //   return [list, card];
  // }

  // getData().then(([list, card]) => {
  //   list.content;
  //   card.content
  // }).catch(error => {`${response.status} ${response.statusText}`});


  export { getDataProductList, getDataProductCard }