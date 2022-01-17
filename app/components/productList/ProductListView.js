export default class ProductListView {

  constructor() {
    this.content = document.body.querySelector('.content');
    this.main = document.body.querySelector('.main');
  }

  renderPosts({results}) {
    this.main.insertAdjacentHTML('beforeend', results.map(this.getPostHTML));
  }

  getPostHTML({name, brand, image, releaseDate, retailPrice}) {
    return `  
        <div class="card mycard">
        <span class="card-title">${name}</span>
        <div class="card-image">
          <div class="myimg">
            <img src=${image.thumbnail}>
          </div>
        </div>
        <span class="card-title">${brand}</span>
        <div class="card-content">
          <p>${releaseDate}</p>
        </div>
        <div class="card-action">
          <p>${retailPrice}</p>
        </div>
      </div>`
  }
}
