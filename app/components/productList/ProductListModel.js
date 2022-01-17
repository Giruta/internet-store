export class ProductListModel {
  url = '';
  constructor(cback) {
    this.handleLoad = cback;
  }

  getProductList(){
    return axios.get(this.url)
      .then(response => response.data);
  }

//   fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=%3CREQUIRED%3E", {
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
//     "x-rapidapi-key": "f8f51a9f94mshcb9cd445571f34dp17cadbjsn8e715a011792"
//   }
// })
// .then(response => {
//   console.log(response);
// })
//   .catch(err => {
//     console.error(err);
//   });
}
