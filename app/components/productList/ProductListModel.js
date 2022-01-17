export default class ProductListModel {
  URL_SHEET = 'https://v1-sneakers.p.rapidapi.com/v1/sneakers';

  // getData(){
  //   return fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20&page=1", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
  //       // "x-rapidapi-key": "f8f51a9f94mshcb9cd445571f34dp17cadbjsn8e715a011792"
  //       "x-rapidapi-key": "fa26571dc6msh0bb9ffdc4e8e121p109679jsn22d27c675475"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(body => body)
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }
  getData(){
    return fetch("https://the-sneaker-database.p.rapidapi.com/sneakers?limit=10", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
        "x-rapidapi-key": "fa26571dc6msh0bb9ffdc4e8e121p109679jsn22d27c675475"
      }
    })
      .then(res => res.json())
      .then(body => body)
      .catch(err => {
        console.error(err);
      });
  }
}
