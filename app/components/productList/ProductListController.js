import ProductListView from './ProductListView.js';
import ProductListModel from './ProductListModel.js';

export class ProductListController {
  constructor() {
    this.view = new ProductListView();
    this.model = new ProductListModel();

    this.handleLoadPosts();
  }

  handleLoadPosts() {
    this.model.getData().then(data => this.view.renderPosts(data));
  }
}
